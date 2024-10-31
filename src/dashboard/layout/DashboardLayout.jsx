import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <section>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="min-w-screen-xl lg:p-[30px] xl:p-[30px] mt-20 bg-text-primary h-auto min-h-screen">
            {children}
          </main>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
