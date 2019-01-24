const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "hello koa2";
});

app.listen(3322);
console.log("start server and listen to the port 3322");
