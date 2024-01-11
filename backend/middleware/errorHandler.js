import constant from '../utils/constant.js';
import logger from '../utils/logger.cjs';

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      logger.error(`Validation Failed: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Validation Failed',
        message: err.message,
      });
      break;

    case constant.NO_CONTENT:
      logger.error(`No content: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'No content',
        message: err.message,
      });
      break;

    case constant.NOT_FOUND:
      logger.error(`Not Found: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Not Found',
        message: err.message,
      });
      break;

    case constant.UNAUTHORIZED:
      logger.error(`Unauthorized: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Unauthorized',
        message: err.message,
      });
      break;

    case constant.FORBIDDEN:
      logger.error(`Forbidden: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Forbidden',
        message: err.message,
      });
      break;

    case constant.CONFLICT:
      logger.error(`Conflict Error: ${err.message}\n${err.stack}`);
      res.status(statusCode).json({
        title: 'Conflict Error',
        message: err.message,
      });
      break;

    default:
      logger.error(`Internal Server Error: ${err.message}\n${err.stack}`);
      res.status(500).json({
        title: 'Internal Server Error',
        message: 'Something went wrong.',
      });
      break;
  }
};

export default errorHandler;
