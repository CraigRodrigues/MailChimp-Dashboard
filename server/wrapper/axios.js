// Create on instance of axios with credentials for entire app
const axios = require('axios')

const url = require('../../config').MAILCHIMP_API_URL || process.env.MAILCHIMP_API_URL
const secret = require('../../config').MAILCHIMP_API_KEY || process.env.MAILCHIMP_API_KEY

const wrapper = axios.create({
  baseURL: url,
  auth: {
    username: 'mailkimp',
    password: secret
  }
})

module.exports = { wrapper }
