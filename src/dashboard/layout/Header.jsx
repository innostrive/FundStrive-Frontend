import { useContext, useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Container from "../../client/components/Container/Container";
import Dropdown from "../components/Dropdown/Dropdown";
import { SidebarContext } from "../context/SidebarProvider";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { collapse } = useContext(SidebarContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <div>
      <Navbar className="h-max rounded-none max-w-full shadow-none border border-b border-gray-300">
        <div className="flex items-center justify-between w-full px-10">
          <div>
            <IconButton
              variant="text"
              className="ml-auto text-secondary h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={collapse}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
