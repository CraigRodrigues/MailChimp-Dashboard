const router = require('express').Router()
const account = require('./routes/account')
const lists = require('./rotes/lists')
const campaigns = require('./routes/campaigns')

// Account Details
router.get('/account', account.getAccountData)

// List Metrics, Location Data, Client Data
router.get('/lists', lists.getListData)

// Subscribe Email to List
router.post('/lists', lists.subscribeToList)

// Total Emails Sent
router.get('/campaigns', campaigns.getCampaignReports)

module.exports = router
