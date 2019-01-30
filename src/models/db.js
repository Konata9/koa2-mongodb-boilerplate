const mongoose = require("mongoose");
const config = require("./../config/index");
const { accessLogger, errorLogger } = require("./../utils/log4js");

mongoose
  .connect(
    config.DB_URL,
    { useNewUrlParser: true }
  )
  .then(
    () => accessLogger.info(`DB connected find DB on ${config.DB_URL}`),
    (err) => errorLogger.error(err)
  );

mongoose.connection.on("error", (err) =>
  errorLogger.error(`MongoDB connection error: ${err}`)
);

mongoose.connection.on("disconnected", () =>
  accessLogger.info(`MongoDB connection disconnected.`)
);

module.exports = mongoose;
