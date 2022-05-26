import { useState } from "react";
import Fish from "./Fish";
import Form from "./Form";

const Results = () => {

    const fishObj = {
        "name" : "Nemo",
        "colour" : "Orange",
        "age" : 6,
        "diet" : "Vegetarian"
    }

    const [fishData, setFishData] = useState({});

    const [fishArray, setFishArray] = useState([]);

    // I tried a bunch of different things, but can't figure out how to get the array to print on the results page
    return ( 
        <div class="App">
            <h2> Our Fish </h2>
            <hr></hr>
            <br></br>
            <Form fishData={fishData} setFishDate={setFishData} setFishArray={setFishArray}/>

            {
                fishArray.map((fishData) => {
                    return <Fish key={fishData.name} fishData={fishData}/>
                })
            }
        </div>
    );
}
 
export default Results;