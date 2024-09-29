import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarProvider from "../context/SidebarProvider";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen gap-0">
        {/* Sidebar */}
        <div className="h-screen w-72 fixed z-50">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 sm:ml-72 ml-0 w-full">
          {/* Navbar */}
          <Header />
          {/* Main content starts below the navbar */}
          <main className="w-full mt-24 p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
