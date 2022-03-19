import Occupantform from "./occupantForm"
import Total from "./total"
import { Link } from "react-router-dom"
import householdservice from "../services/householdservice"
import { useEffect, useState } from "react"


const Household = ({households, setHouseholds, id}) => {
  useEffect(() => { async function getEm() {
    const request = await householdservice.getAll()
    setHouseholds(request)} getEm() }, [])

  const household = households.find(house => house.id === id)
  console.log(households)
  if (household === undefined) {
    return null
  }
  console.log(household.occupants)
    return (
        <>
        <h1>{household.name}</h1>
        <h2>Spending history:</h2>
        <Total expenses={household.expenses} />
        <Link to={`/households/${household.id}/history`}>Past months</Link> <br/>
        <h3>Occupants:</h3>
        {household.occupants.map(person => 
        <li key={person.id}> 
        <Link to={`/households/${household.id}/occupant/${person.id}`}>{person.name}</Link> <br />
        <Total expenses={household.expenses.filter(e => e.userId === person.id)} key={person.name}/></li> 
        )} <br/>
        <Link to={`/households/${household.id}/evensteven`}>Even it all out!!</Link>
        <Occupantform households={households} setHouseholds={setHouseholds} household={household}/> <br/>
        </>
    ) 

}

export default Household