import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Container from "../Container/Container";
import useNavMenus from "../../hooks/useNavMenus";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navmenus = useNavMenus();
  const activeMenus = navmenus.filter(
    (item) => item.status === "Active" && item.slug === "NAVMENU"
  );

  const handleScroll = () => {
    setStickyNav(window.scrollY > 200);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex uppercase flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {activeMenus
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        .map((activeMenu) => {
          const isExternal = activeMenu.key !== "Contact Us";

          return (
            <Typography
              as="li"
              variant="small"
              key={activeMenu._id}
              className={`text-secondary font-semibold ${
                activeLink === activeMenu.value ? "text-primary" : ""
              }`}
            >
              {isExternal ? (
                <a
                  href={activeMenu.value}
                  onClick={() => setActiveLink(activeMenu.value)}
                  className={`flex items-center ${
                    activeLink === activeMenu.value ? "text-primary" : ""
                  }`}
                >
                  {activeMenu.key}
                </a>
              ) : (
                <NavLink
                  to={activeMenu.value}
                  className={({ isActive }) =>
                    `flex items-center ${isActive ? "text-primary" : ""}`
                  }
                  onClick={() => setActiveLink(activeMenu.value)}
                >
                  {activeMenu.key}
                </NavLink>
              )}
            </Typography>
          );
        })}
    </ul>
  );

  return (
    <div>
      <Navbar
        className={`${
          stickyNav
            ? "fixed animate-nav-down top-0 border-none z-20 max-w-full rounded-none px-4 lg:px-[147px] shadow"
            : ""
        } border-none h-max max-w-full rounded-none px-4 lg:px-[147px] p-0`}
      >
        <Container>
          <div className="flex items-center justify-between w-full h-16 text-secondary">
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
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
            <Typography
              as="a"
              href="/campaign-list"
              className="cursor-pointer flex justify-center items-center bg-primary text-text-primary uppercase font-semibold w-28 h-full hover:bg-black delay-75 duration-100"
            >
              Donate
            </Typography>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </Container>
      </Navbar>
    </div>
  );
}
