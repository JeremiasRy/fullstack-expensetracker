import Occupantform from "./occupantForm"
import Total from "./total"
import { Link } from "react-router-dom"

const Household = ({households, setHouseholds, housematch}) => {
  const household = households.find(h => h.id === Number(housematch.params.id))
    return (
        <>
        <h1>{household.name}</h1>
        <Link to={`/households/${household.id}/history`}>Past months</Link> <br/>
        <Total expenses={household.expenses} />
        Occupants: 
        {household.occupants.map(person => <li key={person.id}><Link to={`/households/${household.id}/occupiant/${person.id}`}>{person.name}</Link></li>)} <br/>
        <Occupantform households={households} setHouseholds={setHouseholds} household={household}/>
        </>
    )
}

export default Household