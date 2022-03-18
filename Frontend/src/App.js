import { useState, useEffect } from 'react'
import Householdform from "./components/householdForm"
import Householdlinks from './components/householdlinks'
import Household from './components/household'
import Person from './components/person'
import Pastmonths from './components/pastmonths'
import { Routes, Route, useMatch, Link } from 'react-router-dom'
import Split from './components/split'
import householdservice from './services/householdservice'

const App = () => {
  const [households, setHouseholds] = useState([])

  useEffect(() => { async function getEm() {
    const request = await householdservice.getAll()
    setHouseholds(request)} getEm() }, [])


  const houseMatch = useMatch('/households/:id')
  const household = houseMatch
   ? households.find(house => house.id === houseMatch.params.id)
   : null
  const personMatch = useMatch('/households/:id/occupant/:id')
  const houseAndPerson = {}
  if (personMatch !== null) {
    const house = households.find(house => house.id === personMatch.pathname.substring(12, 36))
    houseAndPerson.person = house.occupants.find(person => person.id === personMatch.params.id)
    houseAndPerson.house = house
  }
  const houseHistoryMatch = useMatch('/households/:id/history')
  const evenMatch = useMatch('/households/:id/evensteven')

return (
 <>
 <Link to='/'>Home</Link>
 <Routes>
  <Route path='/' element={<><Householdform setHouseholds={setHouseholds} households={households}/> <Householdlinks households={households} /></>} />
  <Route path='/households/:id' element={<Household households={households} setHouseholds={setHouseholds} household={household} />} />
  <Route path='/households/:id/occupant/:id' element={<Person households={households} setHouseholds={setHouseholds} house={houseAndPerson.house} person={houseAndPerson.person} />} />
  <Route path='/households/:id/history' element={<Pastmonths households={households} matchId={houseHistoryMatch}/>}/>
  <Route path='/households/:id/evensteven' element={<Split households={households} matchId={evenMatch}/>} />
 </Routes>
 </>
)
}

export default App
