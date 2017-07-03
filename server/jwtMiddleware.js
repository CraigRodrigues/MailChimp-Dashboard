const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // If jwt-bearer exists then decode it and put on req body
  const auth = req.get('Authorization') || null
  console.log('Inside')
  console.log(auth)
  next()
  // Else
    // Sign jwt with "default" as api key
}
