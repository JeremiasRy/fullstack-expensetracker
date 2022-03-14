import { useField } from "../hooks";

const Householdform = ({ setHouseholds, households }) => {
  const householdname = useField('text')
  const createId = () => {
    const id = Math.floor(Math.random() * 10000)
    return id
  }

  const addHousehold = (e) => {
    e.preventDefault()
    const household = {
      id: createId(),
      name: householdname.value,
      occupants: []
    }
    setHouseholds(households.concat(household))
  }
    return (
      <>
      <form onSubmit={addHousehold}>
      <input {...householdname} placeholder='household'/><br/>
       <button type='submit'>Add</button>
      </form>
      </>
    )
}

export default Householdform