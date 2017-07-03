const myList = 'b8e2c4cce3'

// Returns config object with the correct fields needed
// Takes fields as first arg, and optional params as extra
const setConfig = (fields, ...params) => {
  return {
    params: { fields }
  }
}

const getList = (key) => {
  let axios = require('../wrapper')(key)

  return axios.get('/lists')
    .then(response => response.data)
    .catch(err => console.log(err))
}

const listStats = (key, list = myList) => {
  let axios = require('../wrapper')(key)

  return axios.get(`/lists/${list}`, setConfig('stats'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const clientData = (key, list = myList) => {
  let axios = require('../wrapper')(key)

  return axios.get(`/lists/${list}/clients`, setConfig('clients'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const locationData = (key, list = myList) => {
  let axios = require('../wrapper')(key)

  return axios.get(`/lists/${list}/locations`, setConfig('locations'))
    .then(response => response.data)
    .catch(err => console.log(err))
}

const subscribe = () => {
  // TODO
}

module.exports = { getList, listStats, clientData, locationData, subscribe }
