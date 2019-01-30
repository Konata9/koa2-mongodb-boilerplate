const UserInfo = require("../Schemas/UserInfo");
const { errorLogger } = require("./../utils/log4js");

const userInsert = (userInfo) => {
  const user = new UserInfo({
    ...userInfo
  });

  user.save((err, res) => {
    if (err) {
      errorLogger.error(`insert error: ${err}`);
    } else {
      console.log(res);
    }
  });
};
const getUserList = () => {
  return UserInfo.find();
};

module.exports = {
  userInsert,
  getUserList
};
