import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/households'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}
const newOccupant = async (upObject, id) => {
  const request = await axios.post(`${baseUrl}/${id}/occupants`, upObject)
  console.log(request.data)
  return request.data
}
const addHousehold = async (newHold) => {
  const request = await axios.post(baseUrl, newHold)
  return request.data
}

export default { getAll, newOccupant, addHousehold, }