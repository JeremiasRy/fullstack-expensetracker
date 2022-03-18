import { useField } from '../hooks'
import householdservice from '../services/householdservice'

const Occupantform = ( {households, setHouseholds, household }) => {
    const occupant = useField('text')
    
    const occupantObj = {
        name: occupant.value,
        split: 0,   
    }
    const handlesubmit = async () => {
        const updated = await householdservice.newOccupant(occupantObj, household.id)
        
        /*household.occupants.push(newOccu)
        household.occupants[household.occupants.length - 1].split = (100 / household.occupants.length)
        if (household.occupants.length > 1) {
            household.occupants.forEach(person => { person.split = (100 / household.occupants.length) 
          })
        } */
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