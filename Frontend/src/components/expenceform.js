import { useField } from '../hooks'
import { useState, useRef } from 'react'
import householdservice from '../services/householdservice'
import DatePicker from 'react-datepicker'

import Button from 'react-bootstrap/esm/Button'

import 'react-datepicker/dist/react-datepicker.css'

const Expenseform = ({ households, setHouseholds, household }) => {
  const occupantInput = useRef(null)
  const [startDate, setStartDate] = useState(new Date())

  const amount = useField('number')
  const expense = useField('text')
  const expenseObj = {
    date: startDate.toDateString(),
    name: expense.value,
    amount: Number(amount.value),
    month: startDate.getMonth(),
    year: startDate.getFullYear(),
    shared: true,
    userName: '',
    userId: ''
  }
  const addExpense = async () => {
    expenseObj.userName = occupantInput.current.value
    expenseObj.userId = household.occupants.map(o => o).find(o => occupantInput.current.value === o.name).id
    const newExpense = await householdservice.newExpense(expenseObj, household.id)
    household.expenses.push(newExpense)
    setHouseholds(households.map(house => house.id === household.id ? household : house))
    amount.onReset()
    expense.onReset()
    occupantInput.current.value = ''
  }
  return (
    <>
      <h3>Add expense</h3>
      <input {...expense} placeholder='expense' /> <br />
      <input {...amount} placeholder='amount' /> <br />
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <input list='occupants' ref={occupantInput} placeholder='By' />
      <datalist id='occupants'>
        {household.occupants.map(o => <option value={o.name} key={o.id} />)}
      </datalist> <br />
      <form>
        <input type='radio' name='shareOrnot' id='shared' onClick={() => { expenseObj.shared = true }} />
        <label htmlFor='shared'>Shared</label>
        <input type='radio' id='personal' name='shareOrnot' onClick={() => { expenseObj.shared = false }} />
        <label htmlFor='personal'>Personal</label>
      </form>
      <Button variant='success' onClick={addExpense} style={{ margin: '5px' }}>Add expense</Button>

    </>
  )
}

export default Expenseform
