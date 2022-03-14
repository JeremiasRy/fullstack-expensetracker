import { useState } from 'react'
import Householdform from "./components/householdForm"
import Householdlinks from './components/householdlinks'
import Household from './components/household'
import Person from './components/person'
import { Routes, Route, useMatch, Link } from 'react-router-dom'

const App = () => {
  const [households, setHouseholds] = useState([{
    id: 1234,
    name: 'testitalous',
    occupiants: [
    { id: 12,
        name: 'Piia', 
        expenses: [{        
          id: 23456,
          date: 'Mon Mar 14 2022',
          name: 'Groceries',
          amount: 12.98}],
    },
    { id: 13,
        name: 'Jeremias', 
        expenses: [{        
          id: 39876,
          date: 'Mon Mar 11 2022',
          name: 'Groceries',
          amount: 17.34}]}]
  }, {
    id: 4321,
    name: 'testitalous2',
    occupiants: [
    { id: 21,
        name: 'Aiip', 
        expenses: [{        
          id: 87777,
          date: 'Mon Mar 9 2022',
          name: 'Equipment',
          amount: 11.76}],
    },
    { id: 31,
      name: 'Siamerej', 
      expenses: [{        
        id: 33333,
        date: 'Mon Mar 4 2022',
        name: 'Utilities',
        amount: 67.78}]}]
  }])
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
