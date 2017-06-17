require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST
const ENV = process.env.NODE_ENV
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

console.log(PORT)

app.listen(PORT, () => {
  console.log(`Listening at ${HOST} on port ${PORT} in ${ENV} environment`)
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))

app.use('/api', router)
