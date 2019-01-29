const responseLogger = require("./../config/log4js").getLogger("response");

const userLogin = async (ctx, next) => {
  responseLogger.info(ctx);
  ctx.body = {
    code: 200,
    message: "hello from login"
  };
};

const loginCheck = async (ctx, next) => {
  responseLogger.info(ctx);
  ctx.body = {
    code: 200,
    message: "hello from login check"
  };
};

module.exports = {
  userLogin,
  loginCheck
};
