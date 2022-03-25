const Total = ({ expenses }) => {
  const date = new Date()
  const currentMonth = date.getMonth()

  const thisMonth = Math.floor(expenses.filter(e => e.month === currentMonth).map(e => e.amount).reduce((a, b) => a + b, 0) * 100) / 100

  const all = Math.floor(expenses.map(e => e.amount).reduce((a, b) => a + b, 0) * 100) / 100

  return (
    <>
      This month: {thisMonth}€ <br />
      Year total: {all}€ <br /><br />
    </>
  )
}

export default Total
