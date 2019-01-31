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
      alwaysIncludePattern: true,
      filename: combineFilePath("./../logs/access", "access")
    },
    response: {
      type: "dateFile",
      pattern: ".yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      filename: combineFilePath("./../logs/response", "response")
    },
    error: {
      type: "dateFile",
      pattern: ".yyyy-MM-dd.log",
      alwaysIncludePattern: true,
      filename: combineFilePath("./../logs/errors", "error")
    },
    warn: {
      type: "console"
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
    warn: {
      appenders: ["warn"],
      level: "warn"
    },
    default: {
      appenders: ["out"],
      level: "info"
    }
  },
  replaceConsole: true
});

module.exports = {
  accessLogger: log4js.getLogger("access"),
  errorLogger: log4js.getLogger("error"),
  responseLogger: log4js.getLogger("response"),
  warnLogger: log4js.getLogger("warn")
};
