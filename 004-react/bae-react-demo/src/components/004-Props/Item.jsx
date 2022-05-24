// Item will display the name, image, and cost

const Item = ({name, image, cost}) => {
    // Now have variables name, image and cost
    // Destructured from the props data

    return ( 
        <>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <h2>Salary: {cost}</h2>
        </>        
     );
}
 
export default Item;