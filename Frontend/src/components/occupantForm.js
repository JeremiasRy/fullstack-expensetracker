import { useField } from '../hooks'
import householdservice from '../services/householdservice'

const Occupantform = ( {households, setHouseholds, household }) => {
    const occupant = useField('text')
    const occupantObj = {
        name: occupant.value,
        split: 0,
        houseId: household.id   
    }
    const handlesubmit = async () => {
        const updated = await householdservice.newOccupant(occupantObj, household.id)
        setHouseholds(households.map(house => house.id === household.id ? {...house, occupants: updated} : house))
        occupant.onReset()
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