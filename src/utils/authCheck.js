const { errorLogger } = require("./log4js");

const authCheck = () => async (ctx, next) => {
  return await next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: err
      };
    } else {
      errorLogger.error(err);
    }
  });
};

module.exports = authCheck;
