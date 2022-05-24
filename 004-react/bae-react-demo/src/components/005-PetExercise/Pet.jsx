const Pet = ({name, phoneNumber, address, image, cute}) => {
    return ( 
        <div class="container">
            <div class="name">
                {name}
            </div>
            <img class="pet-image" src={image} alt={name}/>
            <div class="contact-info">
                Address: {address}
            </div>
            <div class="contact-info">
                Phone Number: {phoneNumber}
            </div>
            <div class="cute-or-not">
                Is {name} cute? {cute ? "Yes" : "No"}
            </div>
        </div>
    );
}
 
export default Pet;