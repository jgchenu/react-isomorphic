import React from "react";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import path from "path";
import { Provider } from "react-redux";
import { getStore } from "../src/redux";
import routes from "../src/routes";
import { renderRoutes, matchRoutes } from "react-router-config";

const ROOT_PATH = path.resolve(process.cwd(), ".");

export default async function render(ctx, initialData = {}) {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, ctx.url);
  const preloadPromises = [];

  matchedRoutes.forEach(route => {
    const preloadData = route.route.component.preloadData;
    if (preloadData) {
      preloadPromises.push(preloadData(store.dispatch));
    }
  });
  await Promise.all(preloadPromises);
  const extractor = new ChunkExtractor({
    statsFile: path.resolve(ROOT_PATH, "./static/loadable-stats.json"),
    entrypoints: ["client"]
  });

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter context={{}} location={ctx.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const html = ReactDOMServer.renderToString(jsx);
  const renderedScriptTags = extractor.getScriptTags();
  const renderedLinkTags = extractor.getLinkTags();
  const renderedStyleTags = extractor.getStyleTags();

  return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>React App</title>
          ${renderedLinkTags}
          ${renderedStyleTags}
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify(
            initialData
          )}</script>
          ${renderedScriptTags}
        </body>
      </html>
    `;
}
