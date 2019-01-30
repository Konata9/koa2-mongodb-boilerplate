const { responseLogger, errorLogger } = require("./../utils/log4js");

const router = require("koa-router")({
  prefix: "/api"
});

const login = require("./login");

router.get("/", async (ctx, next) => {
  responseLogger.info(ctx);
  ctx.body = "hello from root";
});

router.post("/users/create", login.createUser);
router.get("/users/list", login.fetchUserList);

module.exports = router;
