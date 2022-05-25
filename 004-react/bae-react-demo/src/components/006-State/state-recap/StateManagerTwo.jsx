// StateManagerTwo is the parent component
// It will contain bool and setBool
// It will render DisplayTwo(bool) and BooleanToggle(setBool)

import { useState } from "react";
import BooleanToggle from "./BooleanToggle";
import Calculator from "./Calculator";
import DisplayTwo from "./DisplayTwo";

const StateManagerTwo = () => {
    
    const [bool, setBool] = useState(true);
    const [calValue, setCalValue] = useState(0);




    const booleanToggle = () => {
        if(bool === true){
            setBool(false);
        } else {
            setBool(true);
        }
    }
    
    return ( 

        <>
            <DisplayTwo bool={bool} calValue={calValue}/>
            <BooleanToggle booleanToggle={booleanToggle}/>
            <Calculator setCalValue={setCalValue}/>
        </>

    );
}
 
export default StateManagerTwo;