import { useState } from "react";


const PizzaArrayForm = () => {
    
    const [pizzaData, setPizzaData] = useState({});

    const [pizzaArray, setPizzaArray] = useState([]);

    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({ //Taking the current value of setPizzaData and allowing JS to modify it
            ...prevValue,   // ... spread operator, ignore all of the previous attributes
            [name]: value,    // Set the key to be the input field name (name, number, address) : value

        }))
    };

    const addToArray = () => {
        setPizzaArray((prevArray) => {
            return[...prevArray, pizzaData] // Same thing as array.push, ignore all data and put this at the end
        });

        // I want my pizzaData to reset to empty
        setPizzaData({}) // Set pizza object state to {} empty braces (empty object)

    }

    return ( 
        <>
            <h1>PIZZA</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/6978/6978255.png" alt="Pizza"/><br></br>
            <label name="type">Type: </label><br></br>
            <input type="text" id="type" name="type" onChange={(event) => {setData(event)}}/><br></br>
            <label name="size">Size: </label><br></br>
            <input type="text" id="size" name="size" onChange={(event) => {setData(event)}}/><br></br>
            <label name="customer">Name: </label><br></br>
            <input type="text" id="customer" name="customer" onChange={(event) => {setData(event)}}/><br></br>
            <label name="stuffedCrust">Stuffed Crust:</label><br></br>
            <input type="radio" name="stuffedCrust" value={true} onChange={(event) => setData(event)}/>Yes
            <input type="radio" name="stuffedCrust" value={false} onChange={(event) => setData(event)}/>No<br></br><br></br>

            <button type="button" onClick={addToArray}> Click to add order! </button><br></br>
            <button type="button" onClick={() => console.log(pizzaArray)}> Print Order! </button>
        </>
     );
}
 
export default PizzaArrayForm;