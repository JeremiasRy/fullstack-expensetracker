const householdRouter = require('express').Router()
const Household = require('../models/household')
const Occupant = require('../models/occupant')
const Expense = require('../models/expense')

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
      monthsSettled: req.body.monthsSettled,
      occupants: newHousehold.occupants,
      expenses: newHousehold.expenses
    })

    const savedHousehold = await household.save()
    res.json(savedHousehold.toJSON())
})

householdRouter.post('/:id/occupants', async (req,res) => {
  const household = await Household.findById(req.body.houseId)
  const newOccu = new Occupant({
    name: req.body.name,
    split: req.body.split,
    houseId: req.body.houseId
  })
  household.occupants.push(newOccu)
  household.save()
  const saved = await newOccu.save()
  const occupants = await Occupant.find({houseId: req.body.houseId})

  occupants[occupants.length - 1].split = (100 / occupants.length)
  if (occupants.length > 1) {
    occupants.forEach(person => { person.split = (100 / occupants.length) 
  })
  } 
  occupants.forEach(person => person.save())
  res.json(occupants.map(person => person.toJSON()))
  })

householdRouter.get('/occupants', async (req, res) => {
  const occupants = await Occupant.find({})
  return res.json(occupants.map(person => person.toJSON()))
})
householdRouter.get('/:id/occupants/:id', async (req, res) => {
  const occupant = await Occupant.findById(req.params.id)
  return res.json(occupant.toJSON())
})

householdRouter.get('/:id', async (req,res) => {
  const household = await Household.findById(req.params.id)
  .populate('occupants')
  .populate('expenses')
  res.json(household.toJSON())
})
householdRouter.put('/:id', async (req,res) => {
  const household = {
    name: req.body.name,
    monthsSettled: req.body.monthsSettled,
    occupants: req.body.occupants.map(o => o.id),
    expenses: req.body.expenses.map(e => e.id),
    id: req.body.id
  }
  const updated = await Household.findByIdAndUpdate(req.body.id, household, {new: true})
  console.log(updated)
  res.json(updated.toJSON())
})

householdRouter.delete('/:id', async (req,res) => {
  const household = await Household
  .findById(req.params.id)
  .populate('occupants')
  .populate('expenses')
  if (!household) {
    throw Error ('deleted already')
  }
  const name = household.name
  household.occupants.forEach(o => { o.delete() })
  household.expenses.forEach(e => { e.delete() })
  household.delete()
  console.log(name)
  res.json(`Succesfully removed ${name}`)
})

householdRouter.post('/:id/expenses', async (req,res) => {
  const household = await Household.findById(req.params.id)
  const expense = new Expense({
    date: req.body.date, 
    name: req.body.name, 
    amount: req.body.amount, 
    month: req.body.month, 
    year: req.body.year, 
    shared: req.body.shared,
    userName: req.body.userName, 
    userId: req.body.userId
  })
  household.expenses.push(expense)
  household.save()
  const savedExpense = await expense.save()
  res.json(savedExpense.toJSON())
})
householdRouter.put('/:id/splits', async (req,res) => {
  const houseOccupants = await Occupant.find({houseId: req.body.houseId})
  const requestOccupant = houseOccupants.find(o => o.id === req.body.id)
  const otherOccupants = houseOccupants.filter(o => o.id !== req.body.id)
  requestOccupant.split = req.body.split
  otherOccupants.forEach(o => {
    o.split = ((100 - req.body.split) / otherOccupants.length) 
  })
  houseOccupants.forEach(o => o.save())
  res.json(houseOccupants.map(house => house.toJSON()))
})

module.exports = householdRouter