const mongoose = require("./../db");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema(
  {
    username: { type: String, default: null },
    password: { type: String, default: null },
    roles: { type: Array, default: [1] }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

module.exports = mongoose.model("UserInfo", UserInfoSchema);
