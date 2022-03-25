const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.connect(config.mongoUrl)

const householdSchema = new mongoose.Schema({
    name: String,
    monthsSettled: [],
    occupants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Occupant'}],
    expenses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Expense'}]
})

householdSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Household', householdSchema)