const axios = require('../wrapper/axios').wrapper

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
  return axios.get('', config)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  accountDetails
}
