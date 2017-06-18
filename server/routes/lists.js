const errorHandler = require('./error')
const Mailchimp = require('../mailchimp/lists')

const getListData = (req, res) => {
  // Batch promise.all
  Promise.all([Mailchimp.listStats(), Mailchimp.clientData(), Mailchimp.locationData()])
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
