import { useField } from '../hooks'
import householdservice from '../services/householdservice'

const Occupantform = ({ households, setHouseholds, household }) => {
    const occupant = useField('text')
    const createId = () => {
        const id = Math.floor(Math.random() * 10000)
        return id
    }
    const occupantObj = {
        id: createId(),
        name: occupant.value,
        split: 0,
        expenses: []
        
    }
    const handlesubmit = async () => {
        const upHouseObj = household
        upHouseObj.occupants.push(occupantObj)
        upHouseObj.occupants[upHouseObj.occupants.length - 1].split = (100 / upHouseObj.occupants.length)
        if (upHouseObj.occupants.length > 1) {
            console.log('täh')
            upHouseObj.occupants.forEach(person => { person.split = (100 / upHouseObj.occupants.length) 
        })
    }
        const updated = await householdservice.updateHouseHold(upHouseObj, upHouseObj.id)
        setHouseholds(households.map(h => h.id === household.id ? updated : h))
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