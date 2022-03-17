const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.connect(config.mongoUrl)

const householdSchema = new mongoose.Schema({
    name: String,
    occupants: [{ name: String, split: Number}],
    expenses: [{ date: String, name: String, amount: Number, month: Number, year: Number, userName: String, userId: String}]
})

householdSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      returnedObject.occupants.forEach(person => { 
          person.id = person._id.toString() 
          delete person._id})
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Household', householdSchema)