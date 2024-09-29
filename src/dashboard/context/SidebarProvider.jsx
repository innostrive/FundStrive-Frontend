import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const collapse = () => {
    setSidebarToggle((prev) => !prev);
  };
  const values = {
    collapse,
    setSidebarToggle,
    sidebarToggle,
  };
  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
};

export default SidebarProvider;
