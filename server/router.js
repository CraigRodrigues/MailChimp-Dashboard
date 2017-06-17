const router = require('express').Router()

// ACCOUNT DETAILS
router.get('/account')

// LOCATION DATA
// LIST METRICS
router.get('/lists')

// TOTAL EMAILS SENT
router.get('/campaigns')

// ADD EMAIL TO LIST
router.post('/subscribe')

module.exports = router
