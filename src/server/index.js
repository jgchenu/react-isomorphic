import Koa from "koa";
import KoaRouter from "koa-router";
import KoaStatic from "koa-static";
import { renderToString } from "react-dom/server";
import chalk from "chalk";
import Home from "./../client/containers/Home";
import React from "react";
import path from "path";

const content = renderToString(<Home />);

const router = new KoaRouter();
const app = new Koa();

// 项目的根目录
const ROOT_PATH = process.cwd();

app.use(KoaStatic(path.resolve(ROOT_PATH, "./public")));

router.get("/", async ctx => {
  ctx.body = `
  <html>
  <head><title>react ssr</title></head>
  <body>${content}</body>
  <script src="/index.js"></script>
  </html>
  `;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(chalk.yellow("listen at 3000"));
});
