const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');
const dir = path.resolve(__dirname, '..', 'logs');

require('winston-daily-rotate-file');

const logger = () => {
    return createLogger({
        format: format.combine(
            format.simple(),
            format.timestamp(),
            format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
        ),
        transports: [
            new transports.DailyRotateFile({
                maxsize: 5120000,
                filename: `${dir}/%DATE%.log`
            }),
            new transports.Console()
        ]
    });
}

module.exports = logger;



    



