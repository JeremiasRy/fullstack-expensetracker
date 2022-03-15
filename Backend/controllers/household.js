const householdRouter = require('express').Router()
const Household = require('../models/household')
const middleware = require('../utils/middleware')

householdRouter.get('/', async (req, res) => {
    const households = await Household
    .find({})
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

module.exports = householdRouter