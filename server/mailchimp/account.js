const config = {
  params: {
    fields: [
      'first_name',
      'last_name',
      'avatar_url',
      'total_subscribers',
      'account_industry',
      'industry_stats',
      'member_since'
    ].join(',')
  }
}

const accountDetails = () => {
  let axios = require('../wrapper')()

  return axios.get('/', config)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

const validateKey = (key) => {
  let axios = require('../wrapper')(key)

  return axios.get('/', { params: { fields: ['account_id'] } })
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

module.exports = { accountDetails, validateKey }
