import NavbarMark from "../molecules/NarvbarMark";
import NavbarLinkList from "../molecules/NavbarLinkList";

const Navbar = () => {
    return (  

        <div className="flex flex-wrap bg-dark items-center md:w-auto pt-4 pb-4 pl-12 pr-12 ">
            <NavbarMark logo='logo.png' logoHeight={5} logoWidth={5} > Pagina pepe </NavbarMark>
            <NavbarLinkList/>        
        </div>

    );
}
 
export default Navbar;