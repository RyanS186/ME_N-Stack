const Form = ({setText, setColour}) => {

    // console.log(setText("Is this working?"));

    return ( 
        <>
        <input type="text" onChange={(event) => setText(event.target.value)}/>  
        </>
    );
}
 
export default Form;