import Koa from "koa";
import KoaRouter from "koa-router";
import { renderToString } from "react-dom/server";
import chalk from "chalk";
import Home from "./../client/containers/home";
import React from "react";
const content = renderToString(<Home />);

const router = new KoaRouter();
const app = new Koa();
router.get("/", async ctx => {
  ctx.body = `
  <html>
  <head><title>react ssr</title></head>
  <body>${content}</body>
  </html>
  `;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(chalk.yellow("listen at 3000"));
});
