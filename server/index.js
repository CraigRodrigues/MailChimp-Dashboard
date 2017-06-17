require('dotenv').config()

const express = require('express')
// const port = process.env.PORT
const port = 1337
const path = require('path')
const bodyParser = require('body-parser')
// const router = require('./router')
const app = express()

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public/')))

// app.use('/api', router)
