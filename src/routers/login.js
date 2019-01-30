const { responseLogger } = require("../utils/log4js");
const { userInsert, getUserList } = require("./../services/login");

const createUser = async (ctx, next) => {
  responseLogger.info(ctx);
  const userInfo = ctx.request.body;
  await userInsert(userInfo);
  ctx.body = {
    code: 200,
    message: "new user created"
  };
};

const fetchUserList = async (ctx, next) => {
  responseLogger.info(ctx);
  const userList = await getUserList();
  ctx.body = {
    code: 200,
    message: userList
  };
};

module.exports = {
  createUser,
  fetchUserList
};
