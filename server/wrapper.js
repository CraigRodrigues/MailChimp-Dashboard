// Create on instance of axios with credentials for entire app
const axios = require('axios')

module.exports = (key) => {
  if (key === 'null') {
    key = process.env.MAILCHIMP_API_KEY
  }

  let dc = key.split('-')[1]

  return axios.create({
    baseURL: `https://${dc}.api.mailchimp.com/3.0`,
    auth: {
      username: 'mailkimp',
      password: key
    }
  })
}
