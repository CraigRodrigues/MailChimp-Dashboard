const errorHandler = require('./error')
const Mailchimp = require('../mailchimp/account')

const getAccountData = (req, res) => {
  Mailchimp.accountDetails()
    .then(data => res.send(data))
    .catch(error => errorHandler(error, res, 500))
}

const validateKey = (req, res) => {
  Mailchimp.validateKey(req.body.apiKey)
    .then(data => res.send(data))
    .catch(error => res.send(error))
}

module.exports = { getAccountData, validateKey }
