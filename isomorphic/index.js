import React from "react";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import path from "path";
import { Provider } from "react-redux";
import { getStore } from "../src/redux";
import routes from "../src/routes";
import { renderRoutes, matchRoutes } from "react-router-config";
import Helmet from "react-helmet";

const ROOT_PATH = path.resolve(process.cwd(), ".");

export default async function render(ctx, context) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, ctx.url);
  const preloadPromises = [];

  matchedRoutes.forEach(route => {
    const preloadData = route.route.component.preloadData;
    if (preloadData) {
      preloadPromises.push(
        (async () => {
          try {
            return await preloadData({
              dispatch: store.dispatch
            });
          } catch (error) {
            // 即使其中一个preloadData失败了，其他成功了，那么页面也能够正常返回
            return null;
          }
        })()
      );
    }
  });
  await Promise.all(preloadPromises);
  const __INITIAL_DATA__ = store.getState();
  const extractor = new ChunkExtractor({
    statsFile: path.resolve(ROOT_PATH, "./static/loadable-stats.json"),
    entrypoints: ["client"]
  });

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter context={context} location={ctx.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const html = ReactDOMServer.renderToString(jsx);
  const helmet = Helmet.renderStatic();
  const renderedScriptTags = extractor.getScriptTags();
  const renderedLinkTags = extractor.getLinkTags();
  const renderedStyleTags = extractor.getStyleTags();

  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>React App</title>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${renderedLinkTags}
          ${renderedStyleTags}
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify(
            __INITIAL_DATA__
          )}</script>
          ${renderedScriptTags}
        </body>
      </html>
    `;
}
