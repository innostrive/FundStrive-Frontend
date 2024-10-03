import React from "react";
// import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { StickyNavbar } from "../shared/Navbar";
import TopNav from "../Navbar/TopNav";
import useSetting from "../../../dashboard/hooks/useSettings";

const Layout = () => {
  const { settings } = useSetting();
  console.log(settings);
  return (
    <div>
      <TopNav />
      <StickyNavbar></StickyNavbar>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
