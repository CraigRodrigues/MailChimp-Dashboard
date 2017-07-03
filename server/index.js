require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const { decodeJWT } = require('./jwtMiddleware')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))
app.use('/api', decodeJWT, router)

module.exports = app
