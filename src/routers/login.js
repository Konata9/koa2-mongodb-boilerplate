const userLogin = async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: "hello from login"
  };
};

const loginCheck = async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: "hello from login check"
  };
};

module.exports = {
  userLogin,
  loginCheck
};
