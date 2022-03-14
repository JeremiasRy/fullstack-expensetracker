import { Link } from "react-router-dom"

const Householdlinks = ({ household }) => {
 return (
     <>
     <li><Link to={`/households/${household.id}`}>{household.name}</Link></li>
     </>
 )
}

const Households = ({households}) => {
  
    return (
    <>
    <h2>households</h2>
    <ul>
    {households.map(house =>
    <Householdlinks household={house} key={house.id}/>
    )}
    </ul>   
    </>
    )
  }

export default Households