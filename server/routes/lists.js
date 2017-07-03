const errorHandler = require('./error')
const Mailchimp = require('../mailchimp/lists')

const getListData = (req, res) => {
  // Batch async promises
  Promise.all([Mailchimp.listStats(req.token), Mailchimp.clientData(req.token), Mailchimp.locationData(req.token)])
    .then(results => {
      res.send(results)
    })
    .catch(error => errorHandler(error, res, 500))
}

const subscribeToList = (req, res) => {
  res.sendStatus(201)
}

module.exports = {
  getListData,
  subscribeToList
}
