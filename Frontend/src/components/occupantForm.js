import { useField } from '../hooks'
import householdservice from '../services/householdservice'
import Button from 'react-bootstrap/esm/Button'

const Occupantform = ({ households, setHouseholds, household }) => {
  const occupant = useField('text')
  const occupantObj = {
    name: occupant.value,
    split: 0,
    houseId: household.id
  }
  const handlesubmit = async () => {
    const updated = await householdservice.newOccupant(occupantObj, household.id)
    setHouseholds(households.map(house => house.id === household.id ? { ...house, occupants: updated } : house))
    occupant.onReset()
  }
  return (
    <>
      <input {...occupant} placeholder='name' /> <br />
      <Button variant='success' onClick={handlesubmit} style={{ margin: '5px' }}>Add occupant</Button>
    </>
  )
}

export default Occupantform
