import Expenseform from "./expenceform"
import Total from "./total"
import { Link } from "react-router-dom"

const Person = ({ households, setHouseholds, personmatch }) => {
    const household = households.find(h => h.id == personmatch.pathname.substring(12, 16))
    const person = household.occupiants.find(occupiant => occupiant.id == personmatch.params.id)
    const expenses = person.expenses.map(e => e.amount)
    return (
        <>
        <h1>{person.name}</h1>
        <Total expenses={expenses}/> <br/>
        expenses:
        {person.expenses.map(e => <li>{e.date.substring(4, 10)}, {e.name} {e.amount}€</li>)} <br/><br/>
        <br/><br/>
        <Expenseform household={household} person={person} households={households} setHouseholds={setHouseholds}/> <br/>
        <Link to={`/households/${household.id}`}>Back</Link>
        </>
    )
}

export default Person