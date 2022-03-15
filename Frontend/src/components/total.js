const Total = ({ expenses }) => {
    const date = new Date()
    const currentMonth = date.getMonth()
    
    const thisMonth = expenses.filter(e => e.month === currentMonth).map(e => e.amount).reduce((a,b) => a + b, 0)

    const all = expenses.map(e => e.amount).reduce((a,b) => a + b, 0)

 return (
     <>
     This month: {thisMonth}€ <br/>
     Year total: {all}€ <br/><br/>
     </>
 )
}

export default Total