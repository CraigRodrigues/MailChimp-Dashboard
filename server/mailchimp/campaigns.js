const config = {
  params: {
    count: 50,
    fields: 'campaigns'
  }
}

const campaignReports = (key) => {
  let axios = require('../wrapper')(key)

  return axios.get('/campaigns', config)
    .then(response => response.data)
    .catch(err => console.log(err))
}

module.exports = { campaignReports }
