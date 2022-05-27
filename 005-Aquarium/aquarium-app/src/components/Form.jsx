import { useState } from 'react';
import Fish from './Fish';

const Form = () => {

    const [fishData, setFishData] = useState({});

    const [fishArray, setFishArray] = useState([]);

    const setData = (event) => {
        const {id, value} = event.target;

        setFishData((prevValue) => ({
            ...prevValue,
            [id]: value,
        }))
    };

    const addToArray = () => {
        setFishArray((prevArray) => {
            return[...prevArray, fishData]
        });
        setFishData({})
    }
    
    return ( 
        <div class="App">
            <h2> Add New Fish </h2>
            <hr></hr>
            <br></br>
            <form>
                <label for="name">Name: </label>
                <br></br>
                <input type="text" id="name" placeholder="Nemo" onChange={(event) => setData(event)}/>
                <br></br>
                <label for="colour">Colour: </label>
                <br></br>
                <input type="text" id="colour" placeholder="Orange" onChange={(event) => setData(event)}/>
                <br></br>
                <label for="age">Age: </label>
                <br></br>
                <input type="number" id="age" placeholder="6" onChange={(event) => setData(event)}/>
                <br></br>
                <label for="diet">Diet: </label>
                <br></br>
                <input type="text" id="diet" placeholder="Vegetarian" onChange={(event) => setData(event)}/>
                <br></br>
                <button class="button add-btn" type="button" onClick={addToArray}>Add fish</button>
                <input class="button reset-btn" type="reset" value="Reset"/>
                
            </form>
            {
                    fishArray.map((fishData, key) => {
                        return(<Fish data={fishData} key={key}/>)
                    })
            }
        </div>
    );
}
 
export default Form;