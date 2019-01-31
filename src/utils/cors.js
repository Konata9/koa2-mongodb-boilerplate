const { warnLogger } = require("./log4js");

const cors = () => {
  return async (ctx, next) => {
    warnLogger.warn("You are setting CORS head");
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
  };
};

module.exports = cors;
