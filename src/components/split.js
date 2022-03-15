const Split = ({ households, matchId }) => {
  const household = households.find(h => h.id === Number(matchId.params.id))
  const occupants = household.occupants.map(person => person)

  return (
    <>
    <h2>Your splits are:</h2>
    Negative difference means you get money, positive means you need to pay to the other occupant.
    {occupants.map(person => <><h3>{person.name}: {person.split}%</h3>
    Total amount spent: <br/>
    {household.expenses.filter(e => e.userId === person.id).map(x => x.amount).reduce((a,b) => a + b, 0)}€<br/>
    Split from total: <br/>
    {(household.expenses.map(e => e.amount).reduce((a,b) => a + b, 0) * (person.split * 0.01))}€<br/>
    Difference: {(household.expenses.map(e => e.amount).reduce((a,b) => a + b, 0) * (person.split * 0.01)) 
    - (household.expenses.filter(e => e.userId === person.id).map(x => x.amount).reduce((a,b) => a + b, 0))}€</>)}
    </>
)
}

export default Split