// Create on instance of axios with credentials for entire app
const axios = require('axios')

module.exports = (key = process.env.MAILCHIMP_API_KEY) => {
  console.log(key)
  const url = `https://${key.slice(-3)}.api.mailchimp.com/3.0`

  return axios.create({
    baseURL: url,
    auth: {
      username: 'mailkimp',
      password: key
    }
  })
}
