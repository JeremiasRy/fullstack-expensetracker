import { Link } from "react-router-dom"

const Month = ({household, month}) => {
    const x = household[0].expenses.filter(e => e.month === month)
    const y = x.map(e => e.amount)
    const total = y.reduce((a,b) => a + b, 0)
    
    return (
        <>
        {x.map(e => <li key={e.id}>{e.date} {e.name} {e.amount}€</li>)}<br/>
        Total: {total}€
        </>
    )
} 

const Pastmonths = ({households, matchId}) => {
 const household = households.filter(h => h.id === Number(matchId.params.id))
 console.log(household)
 return (
     <>
     <Link to={`/households/${household[0].id}`}>Back</Link>
     <h4>January</h4>
     <Month household={household} month={0}/> <br/>
     <h4>February</h4>
     <Month household={household} month={1}/> <br/>
     <h4>March</h4>
     <Month household={household} month={2}/> <br/>
     <h4>April</h4>
     <Month household={household} month={3}/> <br/>
     <h4>May</h4>
     <Month household={household} month={4}/> <br/>
     <h4>June</h4>
     <Month household={household} month={5}/> <br/>
     <h4>July</h4>
     <Month household={household} month={6}/> <br/>
     <h4>August</h4>
     <Month household={household} month={7}/> <br/>
     <h4>Septemper</h4>
     <Month household={household} month={8}/> <br/>
     <h4>October</h4>
     <Month household={household} month={9}/> <br/>
     <h4>November</h4>
     <Month household={household} month={10}/> <br/>
     <h4>December</h4>
     <Month household={household} month={11}/> <br/>

     </>
 )
}

export default Pastmonths