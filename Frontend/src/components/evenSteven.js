import { Link } from 'react-router-dom'
import householdservice from '../services/householdservice'
import { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Month = ({ household, expenses, month, settlemonth }) => {
  const [open, setOpen] = useState(false)
  const calculation = (person) => {
    const name = person.name
    const userTotal = Math.floor(expenses.filter(e => e.userId === person.id && e.month === month).map(x => x.amount).reduce((a, b) => a + b, 0) * 100) / 100
    const splitFromTotal = Math.floor((expenses.filter(e => e.month === month).map(e => e.amount).reduce((a, b) => a + b, 0) * (person.split * 0.01)) * 100) / 100
    const difference = Math.floor((splitFromTotal - userTotal) * 100) / 100
    const percentFromTotal = Math.floor((userTotal / (expenses.map(e => e.amount).reduce((a, b) => a + b, 0))) * 100 * 100) / 100

    return { name, userTotal, splitFromTotal, difference, percentFromTotal }
  }

  const monthTotal = Math.floor((expenses.filter(e => e.month === month).map(e => e.amount).reduce((a, b) => a + b, 0) * 100)) / 100
  const occupantsCalculated = household.occupants.map(person => calculation(person))
  const occupantToGet = occupantsCalculated.find(o => o.difference < 0)
  const occupantToPay = occupantsCalculated.find(o => o !== occupantToGet)

  if (occupantsCalculated.length > 2) {
    return (
      <h2>
        Sorry i cant calculate this yet
      </h2>
    )
  }
  if (occupantToGet === undefined || occupantToPay === undefined) {
    return (
      <>
        <Button
          style={{ width: '150px' }}
          onClick={() => setOpen(!open)}
          aria-controls='collapse'
          aria-expanded={open}
        >{months[month]}
        </Button>
        <div>
          <Collapse in={open} dimension='width'>
            <div id='collapse'>
              <Card body style={{ width: '400px' }}>
                <>No data from this month</>
              </Card>
            </div>
          </Collapse>
        </div>
      </>
    )
  }
  return (
    <>
      <Button
        style={{ width: '150px' }}
        onClick={() => setOpen(!open)}
        aria-controls='collapse'
        aria-expanded={open}
      >
        {months[month]}
      </Button>
      <div>
        <Collapse in={open} dimension='width'>
          <div id='collapse'>
            <Card body style={{ width: '400px' }}>
              <h4>{months[month]}</h4>
              Month total: {monthTotal}€ <br />
              {occupantToGet.name} used {occupantToGet.userTotal}€ which is {occupantToGet.percentFromTotal}% of this months expenses, <br />
              {occupantToPay.name} used {occupantToPay.userTotal}€ which is {occupantToPay.percentFromTotal}% <br />
              {household.monthsSettled[month] === false ? <>To get even according to your split {occupantToPay.name} has to pay {occupantToGet.name} {occupantToPay.difference}€ <br />  <button onClick={settlemonth} value={month}>Settle month</button></> : <>Month settled!</>}
            </Card>
          </div>
        </Collapse>
      </div>

    </>
  )
}

const EvenSteven = ({ household, households, setHouseholds }) => {
  const settlemonth = async (e) => {
    household.monthsSettled[e.target.value] = true
    const updated = await householdservice.updateHouse(household)
    setHouseholds(households.map(house => house.id === updated.id ? updated : house))
  }

  const sharedExpenses = household.expenses.filter(e => e.shared === true)
  return (
    <>
      <Link to={`/households/${household.id}`}>Back</Link>
      <h1>All right let's settle this</h1>
      <ListGroup>
        {months.map(month =>
          <ListGroupItem key={month}>
            <Month expenses={sharedExpenses} household={household} settlemonth={settlemonth} month={months.indexOf(month)} />
          </ListGroupItem>
        )}
      </ListGroup>
    </>
  )
}

export default EvenSteven
