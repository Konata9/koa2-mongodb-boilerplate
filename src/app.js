const Koa = require("koa");
const { accessLogger } = require("./utils/log4js");
const bodyPaser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const config = require("./config");
const routers = require("./routers");
const cors = require("./utils/cors");
const authCheck = require("./utils/authCheck");
const app = new Koa();

const START_INFO = `Start server and listen to the port ${config.PORT}`;

app.use(bodyPaser());

app.use(cors());

app.use(authCheck());

app.use(
  jwt({
    secret: "sapmle_secret"
  })
);

app.use(routers.routes());

app.listen(config.PORT);

console.log(START_INFO);
accessLogger.info(START_INFO);
