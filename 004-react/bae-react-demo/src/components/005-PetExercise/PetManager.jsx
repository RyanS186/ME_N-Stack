import Pet from "./Pet";

const PetManager = () => {
    return ( 
        <>
        <Pet name="Lassie" phoneNumber="01904 000000" address="Yorkshire" image="https://www.hepper.com/wp-content/uploads/2021/11/shutterstock_164646389.jpg" cute={true}/>
        <Pet name="Fluffy" phoneNumber="01349 000000" address="Hogwarts" image="https://i.pinimg.com/originals/1a/07/51/1a07519add9f2a59d4530edbf5fa1cce.jpg" cute={true}/>
        <Pet name="Garfield" phoneNumber="765 000 0000" address="Jon's House" image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/930f8c03254714413cd757a94b12aeece4b3b44f03cf7431795abd78316abc95._RI_.jpg" cute={true}/>
        </>
     );
}
 
export default PetManager;