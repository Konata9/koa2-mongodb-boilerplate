const Koa = require("koa");
const log4js = require("./config/log4js");
const config = require("./config");
const app = new Koa();

const accessLogger = log4js.getLogger("access");

const START_INFO = `Start server and listen to the port ${config.PORT}`;

app.use(async (ctx) => {
  ctx.body = "hello koa2";
});

app.listen(config.PORT);
console.log(START_INFO);
accessLogger.info(START_INFO);
