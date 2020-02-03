const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStatic = require("koa-static");
const chalk = require("chalk");
const path = require("path");
const ROOT_PATH = path.resolve(__dirname, "../");
const render = require(path.resolve(ROOT_PATH, "./build/main"));
const router = new KoaRouter();
const app = new Koa();

console.log(render);

app.use(KoaStatic("static"));

router.get("*", async ctx => {
  ctx.body = render(ctx);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log(chalk.yellow("listen at 3000"));
});
