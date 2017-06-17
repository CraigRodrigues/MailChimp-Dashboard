require('dotenv').config()
const PORT = process.env.PORT || 1337
const HOST = process.env.HOST || 'localhost'
const ENV = process.env.NODE_ENV || 'development'
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const router = require('./router')
const app = express()

app.listen(PORT, () => {
  console.log(`Listening at ${HOST} on port ${PORT} in ${ENV} environment`)
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))

// app.use('/api', router)
