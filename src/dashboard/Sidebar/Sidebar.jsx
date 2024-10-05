import { useContext, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { adminSidebarItems, userSidebarItems } from "./SidebarRoutes";
import { SidebarContext } from "../context/SidebarProvider";
import { BsChevronDown } from "react-icons/bs";
const Sidebar = () => {
  const { collapse, sidebarToggle, setSidebarToggle } =
    useContext(SidebarContext);
  const [activeItem, setActiveItem] = useState(null);
  const userRole = localStorage.getItem("role");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
    if (openSubmenu === id) {
      setOpenSubmenu(null); // Close the submenu if clicked again
    } else {
      setOpenSubmenu(id); // Open the submenu
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarToggle(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className={`bg-secondary text-text-primary min-h-screen h-auto`}
      initial={{ translateX: 0 }}
      animate={{ translateX: sidebarToggle ? -320 : 0 }}
      transition={{ type: "just", ease: "linear", duration: 0.3 }}
    >
      <div className="py-5">
        <h1 className="text-3xl font-bold uppercase text-center text-text-primary">
          Fund<span className="text-primary">strive</span>
        </h1>
      </div>
      <div className="grid place-content-end p-2 sm:hidden">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 text-white cursor-pointer"
          onClick={collapse}
          initial={{ rotate: false }}
          animate={{ rotate: collapse ? 90 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </motion.svg>
      </div>
      <div className="w-64 h-full text-white p-4">
        <ul>
          {userRole === "admin" ? (
            <>
              {adminSidebarItems.map((item) => (
                <li key={item.id} className="cursor-pointer text-sm">
                  <Link to={item?.link}>
                    <motion.div
                      className={`flex items-center p-3 rounded-lg ${
                        activeItem === item.id ? "bg-primary text-white" : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => handleItemClick(item.id)}
                    >
                      <span className="mr-4 text-xl">{item?.icon}</span>
                      {item.name}
                      {item.subMenus && item.subMenus.length > 0 && (
                        <BsChevronDown
                          className={`text-xl transition-transform ml-4 ${
                            openSubmenu === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </motion.div>
                  </Link>
                  {item.subMenus && item.subMenus.length > 0 && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{
                        height: openSubmenu === item.id ? "auto" : 0,
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="overflow-hidden px-5 py-2"
                    >
                      {item.subMenus.map((subItem) => (
                        <li key={subItem.id} className="py-2">
                          <Link to={subItem.link}>
                            <div
                              className={`flex items-center p-3 rounded-lg ${
                                activeItem === item.id
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              <span className="mr-2">{subItem.icon}</span>
                              {subItem.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </>
          ) : (
            <>
              {" "}
              {userSidebarItems.map((item) => (
                <li key={item.id} className="cursor-pointer text-sm">
                  <Link to={item?.link}>
                    <motion.div
                      className={`flex items-center p-3 rounded-lg ${
                        activeItem === item.id ? "bg-gray-700" : ""
                      }`}
                      onClick={() => handleItemClick(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="mr-4 text-xl">{item.icon}</span>
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
