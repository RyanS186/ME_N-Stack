import { useState } from "react";

const PrintText = () => {
    
    const [text, setText] = useState("");

    
    
    return ( 
        <>
            <input type="text" id="demo1" onChange={(event) => setText(event.target.value)}/>
            <h2>Current value of text is {text}</h2>
        </>
    );
}
 
export default PrintText;