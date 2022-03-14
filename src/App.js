import { useState } from 'react'
import Householdform from "./components/householdForm"
import Householdlinks from './components/householdlinks'
import Household from './components/household'
import Person from './components/person'
import { Routes, Route, useMatch, Link } from 'react-router-dom'

const App = () => {
  const [households, setHouseholds] = useState([
    { 
    id: 1234,
    name: 'testitalous',
    occupants: [
    {   
        id: 12,
        name: 'Piia', 
    },
    {   id: 13,
        name: 'Jeremias', 
    }],
    expenses: [
      {
      id: 12345,
      date: 'Mon Mar 14 2022',
      name: 'Groceries',
      amount: 123,
      month: 2,
      year: 2022,
      userId: 12
    },{
      id: 9876,
      date: 'Mon Mar 14 2022',
      name: 'Groceries',
      amount: 505,
      month: 2,
      year: 2022,
      userId: 13
    }]
  } 
])
  const houseMatch = useMatch('/households/:id')
  const personMatch = useMatch('/households/:id/occupiant/:id')

  return (
 <>
 <Link to='/'>Home</Link>
 <Routes>
  <Route path='/' element={<><Householdform setHouseholds={setHouseholds} households={households}/> <Householdlinks households={households} /></>} />
  <Route path='/households/:id' element={<Household households={households} setHouseholds={setHouseholds} housematch={houseMatch} />} />
  <Route path='/households/:id/occupiant/:id' element={<Person households={households} setHouseholds={setHouseholds} personmatch={personMatch} />} />
 </Routes>
 </>
)
}

export default App
