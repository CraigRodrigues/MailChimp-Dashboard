const jwt = require('jsonwebtoken')

const decodeJWT = (req, res, next) => {
  // If jwt-bearer exists then decode it and put on req body
  const auth = req.get('Authorization') || null
  let token = ''

  if (auth && auth.split(' ')[0] === 'Bearer') {
    token = auth.split(' ')[1]
  }

  if (token.length > 20) {
    const decoded = jwt.verify(token, 'supersecret')
    console.log(decoded)
  } else {
    token = null
  }

  req.token = token
  console.log('Inside')
  console.log(auth, req.token)

  next()
}

const signJWT = (key) => {
  return jwt.sign({ apiKey: key }, 'supersecret')
}

module.exports = { decodeJWT, signJWT }
