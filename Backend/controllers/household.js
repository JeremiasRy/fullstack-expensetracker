const householdRouter = require('express').Router()
const Household = require('../models/household')
const Occupant = require('../models/occupant')
const Expense = require('../models/expense')
const middleware = require('../utils/middleware')

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
  const household = await Household.findById(req.params.id)
  const newOccu = new Occupant({
    name: req.body.name,
    split: req.body.split
  })
  household.occupants.push(newOccu)
  const houseOccuIds = household.occupants.map(person => person)
  const occupants = houseOccuIds.map(id => await Occupant.findById(id) )
  console.log(occupants)
  const savedHold = await household.save()
  newOccu.save()
  res.json(savedHold.toJSON())
  })


module.exports = householdRouter