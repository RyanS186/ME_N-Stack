const Counter = ({changeValue}) => {

    // Counter is running changeValue method and passing in 5
    changeValue(5)

    return ( 
        <>
            <h2>Counter is working</h2>
        </>
     );
}
 
export default Counter;