require('dotenv').config()

const express = require('express')
const port = process.env.PORT
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

app.listen(port, () => {
  console.log(`Listening on port: ${port} in ${process.env.NODE_ENV} environment`)
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))

app.use('/api', router)
