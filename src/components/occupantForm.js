import { useField } from '../hooks'

const Occupantform = ({ households, setHouseholds, household }) => {
    const occupant = useField('text')
    const createId = () => {
        const id = Math.floor(Math.random() * 10000)
        return id
    }
    const occupantObj = {
        id: createId(),
        name: occupant.value,
        expenses: []
    }
    const handlesubmit = () => {
        const upHouseObj = household
        upHouseObj.occupants.push(occupantObj)
        setHouseholds(households.map(h => h.id === household.id ? upHouseObj : h))
    }
    return (
        <>
        <h4>Add a person to this economy</h4>
            <input {...occupant} placeholder='name' /> 
            <button onClick={handlesubmit}>Add</button>
        </>
    )
}

export default Occupantform