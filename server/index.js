require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))
app.use(express.static(path.join(__dirname, '/')))
app.use('/api', router)

module.exports = app
