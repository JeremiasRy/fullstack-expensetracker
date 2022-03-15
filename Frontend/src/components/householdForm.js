import { useField } from "../hooks";
import householdservice from "../services/householdservice";

const Householdform = ({ setHouseholds, households }) => {
  const householdname = useField('text')

  const addHousehold = async (e) => {
    e.preventDefault()
    const household = {
      name: householdname.value,
      occupants: [],
      expenses: []
    }
    const newHold = await householdservice.addHousehold(household)
    setHouseholds(households.concat(newHold))
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