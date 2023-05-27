import NavbarMark from "../molecules/NarvbarMark";
import NavbarLinkList from "../molecules/NavbarLinkList";

const Navbar = () => {
  return (
    <div
      className="flex flex-wrap items-center md:w-auto pt-4 pb-4 pl-0 pr-0 rounded-3xl"
      style={{ backgroundColor: "#202028" }}
    >
      <NavbarMark logo="logo.png" logoHeight={5} logoWidth={5}>
        Pagina pepe
      </NavbarMark>
      <NavbarLinkList />
    </div>
  );
};

export default Navbar;
