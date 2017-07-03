const errorHandler = require('./error')
const Mailchimp = require('../mailchimp/lists')

const getListData = (req, res) => {
  Mailchimp.getList(req.token)
    .then(({ total_items, lists }) => {
      if (total_items === 1) {
        return Promise.resolve(lists[0].id)
      } else if (total_items === 0) {
        // Throw some kind of error that there are no lists?
        return Promise.reject(new Error('No lists found!'))
      } else {
        // Return list with largest subscriber count
        return Promise.resolve(lists.map(list => [list.id, list.stats.member_count])
          .reduce((prev, curr) => {
            if (curr[1] > prev[1]) {
              return curr
            } else {
              return prev
            }
          })[0])
      }
    })
    .then((list) => {
      // Batch async promises
      console.log(list)
      return Promise.all([Mailchimp.listStats(req.token, list), Mailchimp.clientData(req.token, list), Mailchimp.locationData(req.token, list)])
    })
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
