const axios = require('axios')
const url = process.env.MAILCHIMP_API_URL

const config = {
  auth: {
    username: 'mailkimp',
    password: ''
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
  return axios.get('https://us2.api.mailchimp.com/3.0/', config)
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  accountDetails
}
