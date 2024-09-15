import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      {/* <---- Sidebar ----> */}
      <div>
        <Sidebar />
      </div>
      {/* <---- Main Content ----> */}
      <main className="w-full min-h-screen h-auto p-5">{children}</main>
    </section>
  );
};

export default Layout;
