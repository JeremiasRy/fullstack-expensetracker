import { useField } from '../hooks'
import householdservice from '../services/householdservice'

const Occupantform = ({ households, setHouseholds, household }) => {
    const occupant = useField('text')
    
    const occupantObj = {
        name: occupant.value,
        split: 0,   
    }
    const handlesubmit = async () => {
        const upHouseObj = household
        upHouseObj.occupants.push(occupantObj)
        upHouseObj.occupants[upHouseObj.occupants.length - 1].split = (100 / upHouseObj.occupants.length)
        if (upHouseObj.occupants.length > 1) {
            upHouseObj.occupants.forEach(person => { person.split = (100 / upHouseObj.occupants.length) 
        })
    }
        const updated = await householdservice.updateHousehold(upHouseObj, upHouseObj.id)
        console.log(updated)
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