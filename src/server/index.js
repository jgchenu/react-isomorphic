import Koa from "koa";
import KoaRouter from "koa-router";
import KoaStatic from "koa-static";
import chalk from "chalk";
import { render } from "./utils";
// import SSR from "../..";
const router = new KoaRouter();
const app = new Koa();

app.use(KoaStatic("static"));

router.get("*", async ctx => {
  ctx.body = render(ctx);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log(chalk.yellow("listen at 3000"));
});
