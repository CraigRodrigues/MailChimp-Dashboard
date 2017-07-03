const config = {
  params: {
    fields: [
      'first_name',
      'last_name',
      'account_name',
      'avatar_url',
      'total_subscribers',
      'account_industry',
      'industry_stats',
      'member_since'
    ].join(',')
  }
}

const accountDetails = (key) => {
  let axios = require('../wrapper')(key)

  return axios.get('/', config)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

const validateKey = (key) => {
  // Create wrapper with key to test
  let axios = require('../wrapper')(key)

  return axios.get('/', { params: { fields: 'account_id' } })
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(err => {
      console.log(err.message)
      return Promise.reject(new Error('Invalid Key'))
    })
}

module.exports = { accountDetails, validateKey }
