const Footer = () => {

    let year = new Date().getFullYear()

    return ( 
        <>
            <footer class="footer"> Copyright &copy; {year} </footer>
        </>
     );
}
 
export default Footer;