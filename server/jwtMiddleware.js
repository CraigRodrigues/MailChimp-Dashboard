const jwt = require('jsonwebtoken')

const decodeJWT = (req, res, next) => {
  // If jwt-bearer exists then decode it and put on req
  const auth = req.get('Authorization') || null
  let token = null

  if (auth && auth.split(' ')[0] === 'Bearer') {
    token = auth.split(' ')[1]
  }

  if (token && token.length > 20) {
    const decoded = jwt.verify(token, 'supersecret')
    token = decoded.apiKey
  }

  req.token = token
  next()
}

const signJWT = (key) => {
  return jwt.sign({ apiKey: key }, 'supersecret')
}

module.exports = { decodeJWT, signJWT }
