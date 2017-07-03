const errorHandler = require('./error')
const { signJWT } = require('../jwtMiddleware')
const Mailchimp = require('../mailchimp/account')

const getAccountData = (req, res) => {
  Mailchimp.accountDetails(req.token)
    .then(data => res.send(data))
    .catch(error => errorHandler(error, res, 500))
}

const validateKey = (req, res) => {
  Mailchimp.validateKey(req.body.apiKey)
    .then(data => {
      const token = signJWT(req.body.apiKey)
      res.header('token', token)

      res.send(data)
    })
    .catch(error => res.send(error.message))
}

module.exports = { getAccountData, validateKey }
