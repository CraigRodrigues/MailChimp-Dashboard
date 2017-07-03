const errorHandler = require('./error')
const { signJWT } = require('../jwtMiddleware')
const Mailchimp = require('../mailchimp/account')

const getAccountData = (req, res) => {
  Mailchimp.accountDetails()
    .then(data => res.send(data))
    .catch(error => errorHandler(error, res, 500))
}

const validateKey = (req, res) => {
  Mailchimp.validateKey(req.body.apiKey)
    .then(data => {
      const token = signJWT(req.body.apiKey)
      res.header('token', token)

      return data
    })
    .then(data => {
      console.log(data, res.header()._headers)

      res.send(data)
    })
    .catch(error => res.send(error))
}

module.exports = { getAccountData, validateKey }
