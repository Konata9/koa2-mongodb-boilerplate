const { warnLogger } = require("./log4js");

const cors = () => async (ctx, next) => {
  warnLogger.warn("You are setting CORS head");
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "*");
  await next();
};

module.exports = cors;
