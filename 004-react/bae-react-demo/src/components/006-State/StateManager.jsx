import {useState} from 'react';
import Counter from './Counter';
import Display from "./Display";

const StateManager = () => {
    
    // Our manager is going to be creating and storing our state
    // State is our data that is tracked and can change

    // To create state, declare a const[dataYouWantToReach, setSameDate]
    // When the app starts, number is equal to 0
    const [number, setNumber] = useState(0);
    const [query, setQuery] = useState("");

    // number = an int based variable (0,1,2,3,4..)
    // setNumber = a function that takes in a value and sets number to that value

    return ( 
        // Passing the setNumber() function to counter so it can change the state
        <>
            {/* Passing the setNumber() function to counter so it can change the state */}
            <Counter changeValue={setNumber} />
            {/* Passing the number variable to our display so it can use the state */}
            <Display number={number} />
        </>
    );
}
 
export default StateManager;