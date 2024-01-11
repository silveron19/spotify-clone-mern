const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');
const winstonMongoDB = require('winston-mongodb');
require('dotenv').config();

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new DailyRotateFile({
      filename: path.join(logDirectory, '%DATE%-app.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '3d',
    }),
    new winston.transports.Console({}),
    new winstonMongoDB.MongoDB({
      db: process.env.DB_URL,
      options: {
        useUnifiedTopology: true,
      },
      collection: 'error_log',
      storeHost: true, // Store machine hostname in logs
      capped: true, // Use capped collection for log storage
      cappedSize: 10000000, // Maximum size of capped collection in bytes
      metaKey: 'meta', // The key to store metadata in the MongoDB collection
    }),
  ],
});

module.exports = logger;
