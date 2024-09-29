// import Dropdown from "../components/Dropdown/Dropdown";
// import Logo from "../../dashboard/assets/Logo/Logo.jpg";
// const Header = () => {
//   return (
//     <nav className="w-full h-24 border border-b border-gray-200 bg-white shadow-sm fixed z-10">
//       <div className="flex items-center justify-between px-4 w-full h-full">
//         <div className="flex gap-2 items-center w-full h-full">
//           <span className="uppercase text-xl font-semibold text-black tracking-normal">
//             Fund<span className="text-blue-400">strive</span>
//           </span>
//           <img
//             src={Logo}
//             className="h-10 w-10 object-cover rounded-full"
//             alt="Logo"
//           />
//         </div>
//         <div className="flex items-center justify-center -mr-52 w-full h-full">
//           <Dropdown />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import Container from "../../client/components/Container/Container";
import Dropdown from "../components/Dropdown/Dropdown";
import { SidebarContext } from "../context/SidebarProvider";
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const { collapse } = useContext(SidebarContext);
  return (
    <div>
      <Navbar className="border-none h-max rounded-none max-w-full px-4 p-0">
        <Container>
          <div className="flex items-center justify-between w-full relative z-50">
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
            <div className="">
              <Dropdown />
            </div>
          </div>
          {/* <MobileNav open={openNav}>{navList}</MobileNav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
