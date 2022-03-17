import Expenseform from "./expenceform"
import Splitform from './splitform'
import Total from "./total"
import { Link } from "react-router-dom"

const Person = ({ households, setHouseholds, house, person }) => {
    const expensesBy = house.expenses.filter(e => e.userName === person.name)
    console.log(person)
    return (
        <>
        <Link to={`/households/${house.id}`}>Back</Link>
        <h1>{person.name}</h1>
        <Total expenses={expensesBy}/>
        {expensesBy.map(e => <li key={e.id}>{e.date} {e.name} {e.amount}€</li>)} <br/><br/>
        Split: {person.split}% <br/><br/>
        <Expenseform household={house} person={person} households={households} setHouseholds={setHouseholds}/> <br/>
        <Splitform household={house} person={person} households={households} setHouseholds={setHouseholds} />
        </>
    )
}

export default Person