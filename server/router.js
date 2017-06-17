const router = require('express').Router()
const Account = require('./routes/account')
const Lists = require('./routes/lists')
const Campaigns = require('./routes/campaigns')

// Account Details
router.get('/account', Account.getAccountData)

// List Metrics, Location Data, Client Data
router.get('/lists', Lists.getListData)

// Subscribe Email to List
router.post('/lists', Lists.subscribeToList)

// Total Emails Sent
router.get('/campaigns', Campaigns.getCampaignReports)

module.exports = router
