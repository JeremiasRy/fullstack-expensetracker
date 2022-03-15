const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info(`request method: ${request.method}`)
  logger.info(`request path: ${request.path}`)
  logger.info(`request body: ${request.body}`)
  logger.info('-----')
  next()
}

module.exports = { requestLogger }