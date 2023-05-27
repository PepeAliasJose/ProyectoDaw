import NavbarLink from "../atoms/NavbarLink";

const NavbarLinkList = () => {
  const handleMenu = () => {
    var dropdown_menu = document.getElementById("navbar-default");
    console.log();
    if (dropdown_menu?.classList.contains("hidden")) {
      dropdown_menu?.classList.replace("hidden", "block");
    } else {
      dropdown_menu?.classList.replace("block", "hidden");
    }
  };
  return (
    <>
      <button
        onClick={() => handleMenu()}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex ml-auto items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        style={{ backgroundColor: "#202028" }}
        className="hidden md:ml-auto w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          className="font-medium flex flex-col p-4 md:p-0 mt-4 
                 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-white "
        >
          <li className="mb-5 md:mb-0">
            <NavbarLink location="/" Linkclass="navLink">
              Home
            </NavbarLink>
          </li>
          <li className="mb-5 md:mb-0">
            <NavbarLink location="/ayudas" Linkclass="navLink">
              Ayudas
            </NavbarLink>
          </li>
          <li className="mb-5 md:mb-0">
            <NavbarLink location="/blog" Linkclass="navLink">
              Blog
            </NavbarLink>
          </li>
          <li className="mb-5 md:mb-0">
            <NavbarLink location="/stellarium" Linkclass="navLink">
              Virtual Sky
            </NavbarLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarLinkList;
