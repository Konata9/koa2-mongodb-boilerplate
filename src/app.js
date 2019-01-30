const Koa = require("koa");
const accessLogger = require("./utils/log4js").accessLogger;
const bodyPaser = require("koa-bodyparser");
const config = require("./config");
const routers = require("./routers");
const app = new Koa();

const START_INFO = `Start server and listen to the port ${config.PORT}`;

app.use(bodyPaser());

app.use(routers.routes());

app.listen(config.PORT);

console.log(START_INFO);
accessLogger.info(START_INFO);
