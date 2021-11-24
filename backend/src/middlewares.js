const logger = require('pino')();

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  logger.error(err);
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    status: statusCode,
    message: err.message,
  });
}

module.exports = {
  notFound,
  errorHandler
};
