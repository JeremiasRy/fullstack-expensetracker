import Occupantform from "./occupantForm"
import Total from "./total"
import { Link } from "react-router-dom"

const Household = ({households, setHouseholds, household}) => {
  if (!household) {
    return null
  }
    return (
        <>
        <h1>{household.name}</h1>
        <h2>Spending history:</h2>
        <Total expenses={household.expenses} />
        <Link to={`/households/${household.id}/history`}>Past months</Link> <br/>
        <h3>Occupants:</h3>
        {household.occupants.map( person => 
        <li key={person.id}> 
        <Link to={`/households/${household.id}/occupant/${person.id}`}>{person.name}</Link> <br />
        <Total expenses={household.expenses.filter(e => e.userId === person.id)} key={person.name}/></li> 
        )} <br/>
        <Link to={`/households/${household.id}/evensteven`}>Even it all out!!</Link>
        <Occupantform households={households} setHouseholds={setHouseholds} household={household}/> <br/>
        </>
    ) 
}

export default Household