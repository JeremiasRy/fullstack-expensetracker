const householdRouter = require('express').Router()
const Household = require('../models/household')
const Occupant = require('../models/occupant')
const Expense = require('../models/expense')
const middleware = require('../utils/middleware')
const household = require('../models/household')

householdRouter.get('/', async (req, res) => {
    const households = await Household
    .find({})
    .populate('occupants')
    .populate('expenses')
    res.json(households.map(house => house.toJSON()))
})

householdRouter.post('/', async (req, res) => {
    const newHousehold = req.body
    const household = new Household({
      name: newHousehold.name,
      occupants: newHousehold.occupants,
      expenses: newHousehold.expenses
    })

    const savedHousehold = await household.save()
    res.json(savedHousehold.toJSON())
})

householdRouter.post('/:id/occupants', async (req,res) => {
  const newOccu = new Occupant({
    name: req.body.name,
    split: req.body.split,
    houseId: req.body.houseId
  })
  const savedOccupant = await newOccu.save()
  const occupants = await Occupant.find({houseId: req.body.houseId})

  occupants[occupants.length - 1].split = (100 / occupants.length)
  if (occupants.length > 1) {
    occupants.forEach(person => { person.split = (100 / occupants.length) 
  })
  } 
  occupants.forEach(person => person.save())
  res.json(occupants.map(person => person.toJSON()))
  })

householdRouter.get('/:id', async (req,res) => {
  const household = await Household.findById(req.params.id)
  .populate('occupants')
  .populate('expenses')
  res.json(household.toJSON())
})


module.exports = householdRouter