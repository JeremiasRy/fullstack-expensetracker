import { useField } from "../hooks"
import householdservice from "../services/householdservice"

const Splitform = ( {setHouseholds, households, household, person} ) => {
    console.log(household)
    console.log(person)
    const split = useField('number')
    
    const handleSplit = async () => {
        person.split = split.value
        const updated = await householdservice.setSplits(person)
        household.occupants = updated
        setHouseholds(households.map(h => h.id === household.id ? household : h))

    }
 return (
     <>
     <input {...split} placeholder='New split in %'/> <br/>
     <button onClick={handleSplit}>Change split</button>
     </>
 )
}

export default Splitform