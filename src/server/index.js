import Koa from "koa";
import KoaRouter from "koa-router";
import KoaStatic from "koa-static";
import { renderToString } from "react-dom/server";
import chalk from "chalk";
import React from "react";
import { StaticRouter } from "react-router-dom";
import Routes from "./../Routes";

const router = new KoaRouter();
const app = new Koa();

app.use(KoaStatic("public"));

router.get("*", async ctx => {
  const content = renderToString(
    <StaticRouter context={{}} location={ctx.path}>
      <Routes />
    </StaticRouter>
  );
  ctx.body = `
  <html>
  <head><title>react ssr</title></head>
  <body><div id="root">${content}</div></body>
  <script src="/main.js"></script>
  </html>
  `;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(chalk.yellow("listen at 3000"));
});
