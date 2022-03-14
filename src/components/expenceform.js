import { useField } from "../hooks"

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

    const addExpense = () => {
        console.log(expenseObj)
        household.expenses.push(expenseObj)
        setHouseholds(households.map(h => h.id === household.id ? household : h))
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