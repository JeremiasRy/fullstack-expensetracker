const Total = ({ expenses }) => {
    if (expenses.length === 0) {
    return (
        <>
        </>
    )
  } if (expenses.length === 1) {
      return (
          <>
          Total: {expenses}€
          </>
          
      )
  } if (expenses.length > 1) {
     const total = expenses.reduce((a,b) => a + b, 0)
     return (
         <>
         Total: {total}€
         </>
     )
  }
}

export default Total