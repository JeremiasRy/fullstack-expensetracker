import { useField } from "../hooks"
import householdservice from "../services/householdservice"

const Expenseform = ({ households, setHouseholds, household, person}) => {
    const amount = useField('number')
    const expense = useField('text')
    const date = new Date()
    const expenseObj = {
        date: date.toDateString(),
        name: expense.value,
        amount: Number(amount.value),
        month: date.getMonth(),
        year: date.getFullYear(),
        userName: person.name,
        userId: person.id
    }

    const addExpense = async () => {
        const newExpense = await householdservice.newExpense(expenseObj, household.id)
        household.expenses.push(newExpense)
        setHouseholds(households.map(house => house.id === household.id ? household : house))
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