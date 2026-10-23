const winston = require('winston');

const config = require('./config');

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
