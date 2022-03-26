import Splitform from './splitform'
import Total from './total'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const Person = ({ households, setHouseholds, houseAndOccupant }) => {
  console.log(houseAndOccupant)
  if (households === undefined) {
    return null
  }
  const household = houseAndOccupant.household
  const person = houseAndOccupant.person
  const expensesBy = household.expenses.filter(e => e.userId === person.id)

  return (
    <>
      <Link to={`/households/${household.id}`}>Back</Link>
      <h1>{person.name}</h1>
      <h2>All:</h2>
      <Total expenses={expensesBy} />
      <h2>Shared:</h2>
      <Total expenses={expensesBy.filter(e => e.shared === true)} />
      <h2>Personal:</h2>
      <Total expenses={expensesBy.filter(e => e.shared === false)} />
      {expensesBy.filter(e => e.shared === false).length > 0 && <h4>Personal expenses:</h4>}
      <ListGroup>
      {expensesBy.filter(e => e.shared === false).map(e => <ListGroupItem key={e.id}>{e.date} {e.name} {e.amount}€</ListGroupItem>)}
      </ListGroup>
      {expensesBy.filter(e => e.shared === true).length > 0 && <h4>Shared expenses:</h4>}
      <ListGroup>
      {expensesBy.filter(e => e.shared === true).map(e => <ListGroupItem key={e.id}>{e.date} {e.name} {e.amount}€</ListGroupItem>)}
      </ListGroup>
      Split: {person.split}% <br /><br />
      <Splitform household={household} person={person} households={households} setHouseholds={setHouseholds} />
    </>
  )
}

export default Person
