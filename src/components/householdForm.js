import { useField } from "../hooks";

const Householdform = ({ setHouseholds, households }) => {
  const householdname = useField('text')
  const person1 = useField('text')
  const person2 = useField('text')
  const createId = () => {
    const id = Math.floor(Math.random() * 10000)
    return id
  }

  const addHousehold = (e) => {
    e.preventDefault()
    const household = {
      id: createId(),
      name: householdname.value,
      occupiants: [person1.value, person2.value]
    }
    setHouseholds(households.concat(household))
  }
    return (
      <>
      <form onSubmit={addHousehold}>
      <input {...householdname} placeholder='household'/><br/>
      <input {...person1} placeholder='person'/><br/>
      <input {...person2} placeholder='person'/><br/>
       <button type='submit'>Add</button>
      </form>
      </>
    )
}

export default Householdform