import { useState } from "react";
import DisplayForm from "./DisplayForm";
import Form from "./Form";
// State will be stored here, and Form + DisplayForm will be rendered from here

const ManagerForm = () => {
    
    const [text, setText] = useState("");
    
    return ( 
        <>
            <Form setText={setText}/>
            <DisplayForm text={text}/>
        </>
     );
}
 
export default ManagerForm;