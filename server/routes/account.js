const Mailchimp = require('../mailchimp/account')

const getAccountData = (req, res) => {
  Mailchimp.accountDetails()
    .then(data => res.send(data))
    // TODO: Handle Errors
}

module.exports = { getAccountData }
