const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  // If jwt-bearer exists then do nothing (means they have input a key before)

  // Else
    // Sign jwt with "default" as api key
}
