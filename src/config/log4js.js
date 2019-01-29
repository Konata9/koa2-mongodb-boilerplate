const path = require("path");
const log4js = require("log4js");

const combineFilePath = (dirPath, filename) => {
  const filePath = path.resolve(__dirname, dirPath);
  return path.join(filePath, filename);
};

log4js.configure({
  appenders: {
    access: {
      type: "dateFile",
      pattern: ".yyyy-MM-dd.log",
      filename: combineFilePath("./../logs/access", "access.log")
    },
    response: {
      type: "dateFile",
      pattern: ".yyyy-MM-dd",
      filename: combineFilePath("./../logs/response", "response.log")
    },
    error: {
      type: "dateFile",
      pattern: ".yyyy-MM-dd",
      filename: combineFilePath("./../logs/errors", "error.log")
    },
    out: {
      type: "console"
    }
  },
  categories: {
    access: {
      appenders: ["access"],
      level: "info"
    },
    response: {
      appenders: ["response"],
      level: "info"
    },
    error: {
      appenders: ["error"],
      level: "error"
    },
    default: {
      appenders: ["out"],
      level: "info"
    }
  }
});

module.exports = log4js;
