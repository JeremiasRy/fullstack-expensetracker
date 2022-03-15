import axios from 'axios'

const baseUrl = 'http://localhost:3001/households'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  console.log(request.data)
  return request.data
}
const updateHouseHold = async (upObject, id) => {
  const request = await axios.put(`${baseUrl}/${id}`, upObject)
  return request.data
}
const addHousehold = async (newHold) => {
  const request = await axios.post(baseUrl, newHold)
  return request.data
}

export default { getAll, updateHouseHold, addHousehold }