const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStatic = require("koa-static");
const chalk = require("chalk");
const path = require("path");

const router = new KoaRouter();
const app = new Koa();

const ROOT_PATH = path.resolve(__dirname, "..");

const renderPath = path.resolve(ROOT_PATH, "./build/main.js");

app.use(KoaStatic("static"));

router.get("*", async ctx => {
  ctx.status = 200;
  delete require.cache[require.resolve(renderPath)];
  const render = require(renderPath).default;
  ctx.body = await render(ctx);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log(chalk.yellow("listen at 3001"));
});
