import { useField } from "../hooks"

const Splitform = ( {setHouseholds, households, household, person} ) => {
    const split = useField('number')
    
    const handleSplit = () => {
        let others = household.occupants.filter(per => per.id !== person.id)
        others.forEach(person => { person.split = ((100 - Number(split.value)) / others.length) })
        person.split = Number(split.value)
        setHouseholds(households.map(house => house.id === household.id ? household : house))
    }
 return (
     <>
     <input {...split} placeholder='New split in %'/> <br/>
     <button onClick={handleSplit}>Change split</button>
     </>
 )
}

export default Splitform