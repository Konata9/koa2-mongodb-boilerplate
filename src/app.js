const Koa = require("koa");
const log4js = require("./config/log4js");
const bodyPaser = require("koa-bodyparser");
const config = require("./config");
const routers = require("./routers");
const app = new Koa();

const accessLogger = log4js.getLogger("access");

const START_INFO = `Start server and listen to the port ${config.PORT}`;

app.use(bodyPaser());

app.use(routers.routes());

app.listen(config.PORT);

console.log(START_INFO);
accessLogger.info(START_INFO);
