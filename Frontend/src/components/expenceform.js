import { useField } from "../hooks"
import householdservice from "../services/householdservice"

const Expenseform = ({ households, setHouseholds, household, person}) => {
    const amount = useField('number')
    const expense = useField('text')
    const date = new Date()
    const createId = () => {
        const id = Math.floor(Math.random() * 10000)
        return id
    }
    
    const expenseObj = {
        id: createId(),
        date: date.toDateString(),
        name: expense.value,
        amount: Number(amount.value),
        month: date.getMonth(),
        year: date.getFullYear(),
        userId: person.id
    }

    const addExpense = async () => {
        household.expenses.push(expenseObj)
        const upHold = await householdservice.updateHousehold(household, household.id)
        setHouseholds(households.map(h => h.id === household.id ? upHold : h))
    }

    return (
        <>
        <input {...expense} placeholder='expense'/> <br/>
        <input {...amount} placeholder='amount' /> <br/>
        <button onClick={addExpense}>Add expense</button>
        </>
    )
}

export default Expenseform