import { useField } from '../hooks'
import householdservice from '../services/householdservice'
import Button from 'react-bootstrap/esm/Button'

const Householdform = ({ setHouseholds, households }) => {
  const householdname = useField('text')

  const addHousehold = async (e) => {
    e.preventDefault()
    const household = {
      name: householdname.value,
      monthsSettled: [false, false, false, false, false, false, false, false, false, false, false, false],
      occupants: [],
      expenses: []
    }
    const newHold = await householdservice.addHousehold(household)
    setHouseholds(households.concat(newHold))
    householdname.onReset()
  }
  return (
    <>
      <form onSubmit={addHousehold}>
        <input {...householdname} placeholder='household' /><br />
        <Button variant='success' type='submit'>Add</Button>
      </form>
    </>
  )
}

export default Householdform
