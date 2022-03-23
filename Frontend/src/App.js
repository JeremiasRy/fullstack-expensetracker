import { useState, useEffect } from 'react'
import Householdform from "./components/householdForm"
import Householdlinks from './components/householdlinks'
import Household from './components/household'
import Person from './components/person'
import EvenSteven from './components/evenSteven'
import { Routes, Route, useMatch, Link, useLocation  } from 'react-router-dom'
import householdservice from './services/householdservice'

const App = () => {
  const [households, setHouseholds] = useState([])
  const [occupants, setOccupants] = useState([])
  const location = useLocation()
  
  async function getEm() {
    console.log('täh')
    const request = await householdservice.getAll()
    setHouseholds(request)} 
  
  async function getEmOccupants() {
    console.log('täh')
    const request = await householdservice.getOccupants()
    setOccupants(request)}
  
    useEffect(() => getEm(), [location])
    useEffect(() => getEmOccupants(), [location])

  const houseMatch = useMatch('/households/:id')
  const household = houseMatch
    ? households.find(h => h.id === houseMatch.params.id)
    : null

  const personMatch = useMatch('/occupant/:id')
  const houseAndOccupant = personMatch
    ? { person: occupants.find(o => o.id === personMatch.params.id), household: households.find(h => h.id === occupants.find(o => o.id === personMatch.params.id).houseId) }
    : { person: null, household: null }

  const houseHistoryMatch = useMatch('/households/:id/history')
  const houseHistory = houseHistoryMatch 
    ? households.find(h => h.id === houseHistoryMatch.params.id)
    : null

return (
 <>
 <Link to='/'>Home</Link>
 <Routes>
  <Route path='/' element={<><Householdform setHouseholds={setHouseholds} households={households}/> <Householdlinks households={households} /></>} />
  <Route path='/households/:id' element={<Household households={households} setHouseholds={setHouseholds} household={household} />} />
  <Route path='/occupant/:id' element={<Person households={households} setHouseholds={setHouseholds} houseAndOccupant={houseAndOccupant} />} />
  <Route path='/households/:id/history' element={<EvenSteven household={houseHistory}/>}/>
 </Routes>
 </>
)
}

export default App
