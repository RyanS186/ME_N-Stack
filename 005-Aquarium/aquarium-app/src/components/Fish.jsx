const Fish = ({data}) => {
    const {name, colour, age, diet} = data;

    return ( 
        <>
            <h2>Name: {name}</h2>
            <h2>Colour: {colour}</h2>
            <h2>Age: {age}</h2>
            <h2>Diet: {diet}</h2>
        </>
     );
}
 
export default Fish;