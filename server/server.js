const app = require('./index')
const PORT = process.env.PORT
const HOST = process.env.HOST
const ENV = process.env.NODE_ENV

app.listen(PORT, () => {
  console.log(`Listening at ${HOST}:${PORT} in ${ENV} environment`)
})
