import { Link } from "react-router-dom"

const Householdlinks = ({ household }) => {
    console.log(household)
 return (
     <>
     <li key={household.id}><Link to={`/households/${household.id}`}>{household.name}</Link></li>
     </>
 )
}

const Households = ({households}) => {
  
    return (
    <>
    <h2>households</h2>
    <ul>
    {households.map(house =>
    <Householdlinks household={house}/>
    )}
    </ul>   
    </>
    )
  }

export default Households