import Expenseform from "./expenceform"
import Total from "./total"
import { Link } from "react-router-dom"

const Person = ({ households, setHouseholds, personmatch }) => {
    const household = households.find(h => h.id === Number(personmatch.pathname.substring(12, 16)))
    const person = household.occupants.find(occupant => occupant.id === Number(personmatch.params.id))
    const expensesBy = household.expenses.filter(e => e.userId === person.id)
    return (
        <>
        <Link to={`/households/${household.id}`}>Back</Link>
        <h1>{person.name}</h1>
        <Total expenses={expensesBy}/>
        {expensesBy.map(e => <li key={e.id}>{e.date} {e.name} {e.amount}€</li>)} <br/><br/>
        <Expenseform household={household} person={person} households={households} setHouseholds={setHouseholds}/> <br/>
        </>
    )
}

export default Person