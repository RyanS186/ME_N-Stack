const Pizza = ({data}) => {
    
    const {type, size, customer, stuffedCrust} = data
    
    return ( 
        <>
            <h2>Type: {type}</h2>
            <h2>Size: {size}</h2>
            <h2>Customer Name: {customer}</h2>
            <h2>Stuffed Crust: {stuffedCrust}</h2>
        </>
     );
}
 
export default Pizza;