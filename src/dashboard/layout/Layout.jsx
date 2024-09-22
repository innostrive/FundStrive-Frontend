import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="flex min-h-screen">
      {/* <---- Sidebar ----> */}
      <div className="h-full w-72">
        <Sidebar />
      </div>
      {/* <---- Main Content ----> */}
      <main className="flex-1 min-h-screen h-auto p-5 w-full">{children}</main>
    </section>
  );
};

export default Layout;
