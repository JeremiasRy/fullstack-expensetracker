const middleware = require('./utils/middleware')

const express = require('express')
const cors = require('cors')

const app = express()
const mongoose = require('mongoose')
const householdRouter = require('./controllers/household')

app.use(express.json())
app.use(cors())
app.use(middleware.requestLogger)

app.use('/api/households', householdRouter)





module.exports = app