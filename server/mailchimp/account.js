const axios = require('axios')
const url = require('../../config').MAILCHIMP_API_URL || process.env.MAILCHIMP_API_URL
const secret = require('../../config').MAILCHIMP_API_KEY || process.env.MAILCHIMP_API_KEY

console.log(url)
console.log(secret)

const config = {
  auth: {
    username: 'mailkimp',
    password: secret
  },
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
  console.log('ok')
  return axios.get(url, config)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  accountDetails
}
