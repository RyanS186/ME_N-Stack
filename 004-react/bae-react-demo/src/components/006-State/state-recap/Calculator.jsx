// Passing in the setState function and creating custom function

const Calculator = ({setCalValue}) => {

    const addOne = () => {
        setCalValue((x) => {
            return x + 1;
        });
    };

    const subOne = () => {
        setCalValue((x) => {
            return x - 1;
        });
    };

    const timesTwo = () => {
        setCalValue((x) => {
            return x * 2;
        });
    };

    const divTwo = () => {
        setCalValue((x) => {
            return x / 2;
        });
    };

    const addRandom = () => {

        // returns a random integer between 0 and 10
        let randomNum = Math.floor(Math.random() * 11);

        // returns a random integer between min and max
        // const randomNum = (min, max) => {
        //     return Math.floor(Math.random() * (max - min)) + min;
        // };

        setCalValue((x) => {
            return x + randomNum;
        });  
    };

    return ( 
        <>
            <button type="button" onClick={addOne}>&#43; 1</button>
            <button type="button" onClick={subOne}>&#8722; 1</button>
            <button type="button" onClick={timesTwo}>&#215; 2</button>
            <button type="button" onClick={divTwo}>&#247; 2</button>
            <button type="button" onClick={addRandom}>&#43; Random</button>
            <form>
                <label for="minValue">Min</label><br/>
                <input type="text" id="minValue" name="minValue"/><br/>
                <label for="maxValue">Max</label><br/>
                <input type="text" id="maxValue" name="maxValue"/>
            </form>
        </>
     );
}
 
export default Calculator;