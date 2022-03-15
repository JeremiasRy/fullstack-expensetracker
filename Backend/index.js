const express = require('express')
const config = require('./utils/config')
const cors = require('cors')
const middleware = require('./utils/middleware')
const app = express()
const mongoose = require('mongoose')


app.use(cors())
app.use(middleware.requestLogger)

app.get('/', (req, res) => {
    res.send('<p>täh</p>')
})
app.get('/households', (req, res) => {
    res.send('<p>tänne dataa</p>')
})


const PORT = config.port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })