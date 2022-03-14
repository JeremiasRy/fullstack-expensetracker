import Occupiantform from "./occupiantForm"
import Total from "./total"
import { Link } from "react-router-dom"

const Household = ({households, setHouseholds, housematch}) => {
  const household = households.find(h => h.id == housematch.params.id)
  let expenses = [] 
  const occupiants = household.occupiants.map(p => p)
  const expensesArrays = occupiants.map(p => p.expenses)
  expensesArrays.forEach(p => { 
      p.forEach(e => { 
          expenses.push(e.amount) 
        })
    })
  
    return (
        <>
        <h1>{household.name}</h1>
        <Total expenses={expenses} /> <br/><br/>
        Occupiants: 
        {household.occupiants.map(person => <li key={person.id}><Link to={`/households/${household.id}/occupiant/${person.id}`}>{person.name}</Link></li>)} <br/>
        <Occupiantform households={households} setHouseholds={setHouseholds} household={household}/>
        </>
    )
}

export default Household