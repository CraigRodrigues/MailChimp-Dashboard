const errorHandler = require('./error')
const Mailchimp = require('../mailchimp/campaigns')

const getCampaignReports = (req, res) => {
  Mailchimp.campaignReports()
    .then(data => res.send(data))
    .catch(error => errorHandler(error, res, 500))
}

module.exports = { getCampaignReports }
