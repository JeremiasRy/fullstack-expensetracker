const Household = ({household}) => {
    console.log(household)
    return (
        <>
        <h1>{household.name}</h1>
        <ul>{household.occupiants.map(o => <li>{o}</li>)}</ul>
        </>
    )
}

export default Household