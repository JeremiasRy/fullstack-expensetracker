import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/households'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}
const removeHouse = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`)
  return request.data
}
const updateHouse = async (household) => {
  const request = await axios.put(`${baseUrl}/${household.id}`, household)
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
const getHousehold = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`)
  return request.data
}
const getOccupants = async () => {
  const request = await axios.get(`${baseUrl}/occupants`)
  return request.data
}
const getOccupant = async (houseId, id) => {
  const request = await axios.get(`${baseUrl}/${houseId}/occupants/${id}`)
  return request.data
}
const newExpense = async (expense, id) => {
  const request = await axios.post(`${baseUrl}/${id}/expenses`, expense)
  return request.data
}
const setSplits = async (person) => {
  const request = await axios.put(`${baseUrl}/${person.houseId}/splits`, person)
  return request.data
}

export default { getAll, newOccupant, addHousehold, getHousehold, getOccupants, getOccupant, newExpense, setSplits, removeHouse, updateHouse }