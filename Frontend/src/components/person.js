import Splitform from './splitform'
import Total from "./total"
import { Link } from "react-router-dom"

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
        <Total expenses={expensesBy}/>
        {expensesBy.map(e => <li key={e.id}>{e.date} {e.name} {e.amount}€</li>)} <br/><br/>
        Split: {person.split}% <br/><br/>
        <Splitform household={household} person={person} households={households} setHouseholds={setHouseholds} />
        </>
    )
}

export default Person