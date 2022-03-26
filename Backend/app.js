const middleware = require('./utils/middleware')

const express = require('express')
require('express-async-errors')
const cors = require('cors')

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)

const householdRouter = require('./controllers/household')
app.use('/api/households', householdRouter)


module.exports = app