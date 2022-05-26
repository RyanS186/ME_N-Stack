import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div class="navbar">
            <Link to="/">
            <img class="nemo" src="https://cdn-icons-png.flaticon.com/512/875/875011.png" alt="Clown Fish" height="25px"/>
            </Link>
            {/* A way to access my about page <a href="/about"/> */}
            <Link to="/about">
                About Us
            </Link>
            <Link to="/form">
                Form
            </Link>
            <Link to="/results">
                Results
            </Link>
            <Link to="/fish/2">
            <img class="dory" src="https://cdn-icons-png.flaticon.com/512/3751/3751199.png" alt="Blue Tang" height="25px"/>
            </Link>
        </div>
     );
}
 
export default Navbar;