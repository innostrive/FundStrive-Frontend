import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-0">
      {/* Sidebar */}
      <div className="h-screen w-72 fixed">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-72 flex-1 w-full">
        {/* Navbar */}
        <Header />
        {/* Main content starts below the navbar */}
        <main className="w-full mt-24 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
