import { useField } from '../hooks'

const Occupiantform = ({ households, setHouseholds, household }) => {
    const occupiant = useField('text')
    const createId = () => {
        const id = Math.floor(Math.random() * 10000)
        return id
    }
    const occupiantObj = {
        id: createId(),
        name: occupiant.value,
        expenses: []
    }
    const handlesubmit = () => {
        const upHouseObj = household
        upHouseObj.occupiants.push(occupiantObj)
        setHouseholds(households.map(h => h.id === household.id ? upHouseObj : h))
    }
    return (
        <>
        <h4>Add a person to this economy</h4>
            <input {...occupiant} placeholder='name' /> 
            <button onClick={handlesubmit}>Add</button>
        </>
    )
}

export default Occupiantform