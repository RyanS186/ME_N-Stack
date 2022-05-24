import Item from "./Item";

const ItemManager = () => {
    return ( 
        <>
            <Item name="World's Most Expensive Scarecrow" image="https://i2-prod.dailystar.co.uk/incoming/article19025292.ece/ALTERNATES/s1200c/0_GettyImages-472459584.jpg" cost={160000}/>
            <Item name="Possibly a Centaur?" image="https://preview.redd.it/8cgfjpctx9551.jpg?auto=webp&s=129516a44af2e7039f222f2bb00f26dab615076a" cost={400000}/>
        </>
    );
}
 
export default ItemManager;