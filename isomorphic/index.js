import React from "react";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";
import path from "path";
import { Provider } from "react-redux";
import store from "../src/store";
import Routes from "../src/Routes";

export default function render(ctx, initialData = {}) {
  const extractor = new ChunkExtractor({
    statsFile: path.resolve("../dist/loadable-stats.json")
  });

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter context={{}} location={ctx.path}>
        <Routes />
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
          <div id="app">${html}</div>
          <script type="text/javascript">window.__INITIAL_DATA__ = ${JSON.stringify(
            initialData
          )}</script>
          ${renderedScriptTags}
        </body>
      </html>
    `;
}
