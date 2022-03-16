import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/households'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}
const updateHousehold = async (upObject, id) => {
  const request = await axios.put(`${baseUrl}/${id}`, upObject)
  return request.data
}
const addHousehold = async (newHold) => {
  const request = await axios.post(baseUrl, newHold)
  return request.data
}

export default { getAll, updateHousehold, addHousehold }