const app = require('./app')
const config = require('./utils/config')
const mongoose = require('mongoose')
const http = require('http')

mongoose.connect(config.mongoUrl)
  .then(result => {
    console.log('connected')
  })
  .catch(result => {
    console.log('failed to connect')
  })

const server = http.createServer(app)
const PORT = config.port

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})