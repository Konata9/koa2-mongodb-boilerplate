const log4js = require("./../config/log4js");
const router = require("koa-router")({
  prefix: "/api"
});

const [responseLogger, errorLogger] = [
  log4js.getLogger("response"),
  log4js.getLogger("error")
];

const login = require("./login");

router.get("/", async (ctx, next) => {
  responseLogger.info(ctx);
  ctx.body = "hello from root";
});

router.get("/login", login.userLogin);
router.get("/loginCheck", login.loginCheck);

module.exports = router;
