import { useState } from 'react'
import Householdform from "./components/householdForm"
import Householdlinks from './components/householdlinks'
import Household from './components/household'
import { Routes, Route, useMatch } from 'react-router-dom'

const App = () => {
  const [households, setHouseholds] = useState([])

  const houseMatch = useMatch('/households/:id')

  return (
 <>
 <Routes>
  <Route path='/' element={<><Householdform setHouseholds={setHouseholds} households={households}/> <Householdlinks households={households} /></>} />
  <Route path='/households/:id' element={<Household household={houseMatch}/>} />
 </Routes>
 </>
)
}

export default App
