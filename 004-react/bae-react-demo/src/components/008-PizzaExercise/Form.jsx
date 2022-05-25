import { useState } from "react";
import Pizza from "./Pizza";


const Form = () => {
    
    const [pizzaData, setPizzaData] = useState({});

    const setData = (event) => {
        const {name, value} = event.target;

        setPizzaData((prevValue) => ({ //Taking the current value of setPizzaData and allowing JS to modify it
            ...prevValue,   // ... spread operator, ignore all of the previous attributes
            [name]: value,    // Set the key to be the input field name (name, number, address) : value

        }))
    };

    return ( 
        <>
            <h1>PIZZA</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/6978/6978255.png" alt="Pizza"/><br></br>
            <label>Type: </label><br></br>
            <input type="text" id="type" name="type" onChange={(event) => {setData(event)}}/><br></br>
            <label>Size: </label><br></br>
            <input type="text" id="size" name="size" onChange={(event) => {setData(event)}}/><br></br>
            <label>Name: </label><br></br>
            <input type="text" id="customer" name="customer" onChange={(event) => {setData(event)}}/><br></br>
            <h3>Stuffed crust?</h3>
            <label>Yes</label>
            <input type="radio" name="stuffedCrust" value={true} onChange={(event) => setData(event)}/>
            <label>No</label>
            <input type="radio" name="stuffedCrust" value={false} onChange={(event) => setData(event)}/><br></br><br></br>
            <button type="text" onClick={() => console.log(pizzaData)}>Click to print order!</button>
            <Pizza data={pizzaData}/>
        </>
     );
}
 
export default Form;