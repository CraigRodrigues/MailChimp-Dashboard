const axios = require('../wrapper')()
const list = 'b8e2c4cce3'

// Returns config object with the correct fields needed
// Takes fields as first arg, and optional params as extra
// setConfig(fields, [params])
const setConfig = (fields, ...params) => {
  let config = {
    params: {}
  }

  config.params.fields = fields

  return config
}

const listStats = () => {
  return axios.get(`/lists/${list}`, setConfig('stats'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const clientData = () => {
  return axios.get(`/lists/${list}/clients`, setConfig('clients'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const locationData = () => {
  return axios.get(`/lists/${list}/locations`, setConfig('locations'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const subscribe = () => {
  // TODO
}

module.exports = { listStats, clientData, locationData, subscribe }
