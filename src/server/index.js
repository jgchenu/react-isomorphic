import Koa from "koa";
import KoaRouter from "koa-router";
import KoaStatic from "koa-static";
import { renderToString } from "react-dom/server";
import chalk from "chalk";
import Home from "../containers/Home";
import React from "react";
import Path from "path";

const content = renderToString(<Home />);

const router = new KoaRouter();
const app = new Koa();

app.use(KoaStatic("public"));

router.get("/", async ctx => {
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
