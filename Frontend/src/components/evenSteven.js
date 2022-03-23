import { Link } from "react-router-dom"

const Month = ({ household, month }) => {

    const calculation = (person) => {
      const name = person.name
      const userTotal = Math.floor(household.expenses.filter(e => e.userId === person.id && e.month === month).map(x => x.amount).reduce((a,b) => a + b, 0) * 100) / 100
      const splitFromTotal = Math.floor((household.expenses.filter(e => e.month === month).map(e => e.amount).reduce((a,b) => a + b, 0) * (person.split * 0.01)) * 100) / 100
      const difference = Math.floor((splitFromTotal - userTotal) * 100) / 100
      const percentFromTotal = Math.floor((userTotal / (household.expenses.map(e => e.amount).reduce((a,b) => a + b, 0))) * 100 * 100) / 100
  
       return { name, userTotal, splitFromTotal, difference, percentFromTotal }
    }
    const monthTotal = Math.floor((household.expenses.filter(e => e.month === month).map(e => e.amount).reduce((a,b) => a + b, 0) * 100)) / 100
    const occupantsCalculated = household.occupants.map(person => calculation(person))
    const occupantToGet = occupantsCalculated.find(o => o.difference < 0)
    const occupantToPay = occupantsCalculated.find(o => o !== occupantToGet)
    
    if (occupantsCalculated.length > 2) {
      return (
        <h2>
        Sorry i cant calculate this yet
        </h2>
      )
    }
    if (occupantToGet === undefined || occupantToPay === undefined) {
        return (
            <p>No data from this month</p>
        )
    }
    return (
      <>
      Month total: {monthTotal}€ <br/>
      {occupantToGet.name} used {occupantToGet.userTotal}€ which is {occupantToGet.percentFromTotal}% of this months expenses, <br/>
      {occupantToPay.name} used {occupantToPay.userTotal}€ which is {occupantToPay.percentFromTotal}% <br/>
      To get even according to your split {occupantToPay.name} has to pay {occupantToGet.name} {occupantToPay.difference}€ <br/> 
      </>
    )
    }

const EvenSteven = ({ household }) => {
  const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
 return (
     <>
     <Link to={`/households/${household.id}`}>Back</Link>
     <h1>All right let's settle this</h1>
     {months.map(month =>
     <div key={month}> 
     <h4 >{month}</h4>
     <Month household={household} month={months.indexOf(month)}  /> 
     </div>
     )}
    </>
 )
}

export default EvenSteven