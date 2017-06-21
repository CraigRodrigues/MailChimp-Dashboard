// Create on instance of axios with credentials for entire app
const axios = require('axios')

const url = process.env.MAILCHIMP_API_URL
const secret = process.env.MAILCHIMP_API_KEY

module.exports = axios.create({
  baseURL: url,
  auth: {
    username: 'mailkimp',
    password: secret
  }
})
