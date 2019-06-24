const { createLogger, format, transports } = require("winston");
const path = require("path");
const fs = require("fs");
const moment = require("moment");

require("winston-daily-rotate-file");

const logger = () => {
  const dir = path.resolve(__dirname, "..", "..", "logs");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  return createLogger({
    format: format.combine(
      format.simple(),
      format.printf(
        info =>
          `[${moment().format("YYYY-MM-DDTHH:mm:ss")}] ${info.level} ${
            info.message
          }`
      )
    ),
    transports: [
      new transports.DailyRotateFile({
        filename: `${dir}/%DATE%.log`
      }),
      new transports.Console()
    ]
  });
};

module.exports = logger;
