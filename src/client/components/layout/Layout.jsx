import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { StickyNavbar } from "../shared/Navbar";
import TopNav from "../Navbar/TopNav";

const Layout = () => {
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
