require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
// var jwt = require('./jwtMiddleware')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))
// Sign JWT with API key unless there isn't one present
app.use('/api', router)

module.exports = app
