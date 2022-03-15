const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.connect(config.mongoUrl)

const householdSchema = new mongoose.Schema({
    name: String,
    occupants: [{id: Number, name: String, split: Number}],
    expenses: [{id: Number, date: Date, name: String, amount: Number, month: Number, year: Number, userId: Number}]
})

module.exports = mongoose.model('Household', householdSchema)