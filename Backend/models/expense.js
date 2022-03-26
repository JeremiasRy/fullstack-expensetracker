const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.connect(config.mongoUrl)

const expenseSchema = new mongoose.Schema({
    date: String, 
    name: String, 
    amount: Number, 
    month: Number, 
    year: Number, 
    shared: Boolean,
    userName: String, 
    userId: String
})

expenseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Expense', expenseSchema)