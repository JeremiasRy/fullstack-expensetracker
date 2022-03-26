import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const Householdlinks = ({ household }) => {
  return (
    <>
      <ListGroupItem><Link to={`/households/${household.id}`}>{household.name}</Link></ListGroupItem>
    </>
  )
}

const Households = ({ households }) => {
  return (
    <>
      <h2>Households</h2>
      <ListGroup>
        {households.map(house =>
          <Householdlinks household={house} key={house.id} />
        )}
      </ListGroup>
    </>
  )
}

export default Households
