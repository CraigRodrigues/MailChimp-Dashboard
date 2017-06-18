const axios = require('../wrapper/axios').wrapper

const list = 'b8e2c4cce3'
const statsConfig = {
  params: {
    fields: 'stats'
  }
}

const listStats = () => {
  return axios.get(`/lists/${list}`, statsConfig)
    .then(response => response.data)
    .catch(err => console.log(err))
}

const subscribe = () => {

}

module.exports = { listStats, subscribe }
