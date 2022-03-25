import Occupantform from './occupantForm'
import Total from './total'
import Expenseform from './expenceform'
import { Link } from 'react-router-dom'
import householdservice from '../services/householdservice'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Button from 'react-bootstrap/esm/Button'

const Household = ({ households, setHouseholds, household }) => {
  const removeHouse = async (e) => {
    if (window.confirm('Are you sure?')) {
      householdservice.removeHouse(e.target.value)
    }
  }
  if (household === undefined) {
    return null
  }
  return (
    <>
      <h1>{household.name}</h1>
      {household.occupants.length === 0 ? <>Add occupant before adding expenses!</> : <>Add occupant</>}<br />
      <Occupantform households={households} setHouseholds={setHouseholds} household={household} /> <br /><br />
      <ListGroup>
        {household.occupants.map(person =>
          <ListGroupItem key={person.id} style={{ backgroundColor: 'beige' }}>
            <Link to={`/occupant/${person.id}`}>{person.name}</Link> <br />
            <Total expenses={household.expenses.filter(e => e.userId === person.id)} key={person.name} />
          </ListGroupItem>
        )}
      </ListGroup>
      <h2>Shared expenses:</h2>
      <Total expenses={household.expenses.filter(e => e.shared === true)} />
      <Link to={`/households/${household.id}/history`}>Even it all out!!</Link> <br />
      <Expenseform household={household} households={households} setHouseholds={setHouseholds} /> <br />
      <Button variant='danger' value={household.id} onClick={removeHouse} style={{ margin: '5px' }}>Remove household</Button>
    </>
  )
}

export default Household
