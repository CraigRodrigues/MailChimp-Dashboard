require('dotenv').config({ path: '../.env' })
const app = require('./index')

const PORT = require('../config').PORT || process.env.PORT
const HOST = require('../config').HOST || process.env.HOST
const ENV = require('../config').NODE_ENV || process.env.NODE_ENV

app.listen(PORT, () => {
  console.log(`Listening at ${HOST} on port ${PORT} in ${ENV} environment`)
})
