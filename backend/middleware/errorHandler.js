import mongoose from 'mongoose';
import constant from '../utils/constant.js';
import logger from '../utils/logger.cjs';

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  if (err) {
    if (statusCode === constant.BAD_REQUEST) {
      logger.error(`Bad Request: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Bad Request',
        message: err.message,
      });
    }

    if (statusCode === constant.NO_CONTENT) {
      logger.error(`No content: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'No content',
        message: err.message,
      });
    }

    if (statusCode === constant.NOT_FOUND) {
      logger.error(`Not Found: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Not Found',
        message: err.message,
      });
    }

    if (statusCode === constant.UNAUTHORIZED) {
      logger.error(`Unauthorized: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Unauthorized',
        message: err.message,
      });
    }

    if (statusCode === constant.FORBIDDEN) {
      logger.error(`Forbidden: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Forbidden',
        message: err.message,
      });
    }

    if (statusCode === constant.CONFLICT) {
      logger.error(`Conflict Error: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Conflict Error',
        message: err.message,
      });
    }

    if (err instanceof mongoose.Error.ValidationError) {
      logger.error(`Unprocessable Content: ${err.message}\n${err.stack}`);
      res.status(422).json({
        title: 'Unprocessable Content',
        message: err.message,
      });
    }
  } else {
    logger.error(`Internal Server Error: ${err.message}\n${err.stack}`);
    res.status(500).json({
      title: 'Internal Server Error',
      message: 'Something went wrong.',
    });
  }
};

export default errorHandler;
