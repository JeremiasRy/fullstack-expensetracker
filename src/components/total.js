const Total = ({ expenses }) => {
    const date = new Date()
    const currentMonth = date.getMonth()
    
    const thisMonth = expenses.filter(e => e.month === currentMonth)
    const monthProxy = thisMonth.map(e => e.amount)
    const monthTotal = monthProxy.reduce((a,b) => a + b, 0)

    const all = expenses.map(e => e.amount)
    const yearTotal = all.reduce((a,b) => a + b, 0)

 return (
     <>
     This month: {monthTotal}€ <br/>
     Year total: {yearTotal}€ <br/><br/>
     </>
 )
}

export default Total