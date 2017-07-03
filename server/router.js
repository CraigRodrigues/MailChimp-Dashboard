const router = require('express').Router()
const signJWT = require('./jwtMiddleware')
const Account = require('./routes/account')
const Lists = require('./routes/lists')
const Campaigns = require('./routes/campaigns')

// Account
router.get('/account', Account.getAccountData)
router.post('/account', Account.validateKey) // POST used here since JWT resource may be created

// List Metrics, Location Data, Client Data
router.get('/lists', Lists.getListData)

// Subscribe Email to List
router.post('/lists', Lists.subscribeToList)

// Total Emails Sent
router.get('/campaigns', Campaigns.getCampaignReports)

module.exports = router
