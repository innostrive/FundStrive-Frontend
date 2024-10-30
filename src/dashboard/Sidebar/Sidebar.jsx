import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { adminSidebarItems, userSidebarItems } from "./SidebarRoutes";
import { BsChevronDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getTranslationObject } from "../../../i18next";
import LanguageSelector from "../../client/components/LanguageSelector/LanguageSelector";
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const userRole = localStorage.getItem("role");
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { t } = useTranslation();
  console.log("t:", t("sidebarRoutesName"));
  const sidebarRoutes = getTranslationObject("dashboard.sidebarRoutesName");
  console.log("first:", sidebarRoutes);
  const sidebarRoutesArray = Object.entries(sidebarRoutes).map(
    ([key, value]) => ({
      key,
      value,
    })
  );
  const translatedAdminSidebarItems = adminSidebarItems.map((item, index) => ({
    ...item,
    name: sidebarRoutesArray[index]?.value || item.name,
  }));

  const replaceSidebarNames = (adminSidebarItems, sidebarRoutesArray) => {
    return adminSidebarItems.map((item) => {
      const mainTranslation = sidebarRoutesArray.find(
        (t) => t.key.toLowerCase() === item.name.toLowerCase()
      );

      const updatedItem = {
        ...item,
        name: mainTranslation ? mainTranslation.value : item.name,
      };
      if (updatedItem.subMenus) {
        updatedItem.subMenus = updatedItem.subMenus.map((subItem) => {
          const subKey = subItem.name.toLowerCase().replace(" ", "");
          const subTranslation = sidebarRoutesArray.find(
            (t) => t.key.toLowerCase().replace(" ", "") === subKey
          );

          return {
            ...subItem,
            name: subTranslation ? subTranslation.value : subItem.name,
          };
        });
      }

      return updatedItem;
    });
  };

  const updatedAdminSidebarItems = replaceSidebarNames(
    adminSidebarItems,
    sidebarRoutesArray
  );

  console.log("updatedAdminSidebarItems:", updatedAdminSidebarItems);

  const handleItemClick = (id) => {
    setActiveItem(id);
    if (openSubmenu === id) {
      setOpenSubmenu(null); // Close the submenu if clicked again
    } else {
      setOpenSubmenu(id); // Open the submenu
    }
  };

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex min-h-screen h-auto md:w-62.5 lg:w-[304px] flex-col overflow-y-auto  bg-secondary duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full z-[9999]"
      }`}
    >
      <div className="flex space-x-5 sm:justify-center justify-between items-center p-5">
        <h1 className="text-3xl font-bold uppercase text-center text-text-primary">
          Fund<span className="text-primary">strive</span>
        </h1>
        <div className="sm:hidden">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="5"
            stroke="currentColor"
            className="size-8 text-white cursor-pointer"
            initial={{ rotate: false }}
            animate={{ rotate: sidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </motion.svg>
        </div>
      </div>
      <div className="w-64 h-full text-white p-4">
        <ul>
          {userRole === "admin" ? (
            <>
              {adminSidebarItems.map((item) => (
                <li key={item.id} className="cursor-pointer text-sm">
                  {item.link ? (
                    <NavLink to={item?.link}>
                      <motion.div
                        className={`flex items-center p-3 rounded-lg ${
                          pathname === item.link ? "bg-primary text-white" : ""
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => handleItemClick(item?.id)}
                      >
                        <span className="mr-4 text-xl">{item?.icon}</span>
                        {item?.name}
                      </motion.div>
                    </NavLink>
                  ) : (
                    <motion.div
                      className="flex items-center p-3 rounded-lg cursor-pointer"
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
                  )}
                  {item.subMenus && item.subMenus.length > 0 && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{
                        height: openSubmenu === item.id ? "auto" : 0,
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="overflow-hidden"
                    >
                      {item.subMenus.map((subItem) => (
                        <li key={subItem.name} className="px-2">
                          <NavLink to={subItem.link}>
                            <div
                              className={`flex items-center p-3 rounded-lg ${
                                pathname === subItem.link
                                  ? "bg-primary text-white"
                                  : ""
                              }`}
                            >
                              <span className="mr-2">{subItem.icon}</span>
                              {subItem.name}
                            </div>
                          </NavLink>
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
                  <NavLink to={item?.link}>
                    <motion.div
                      className={`flex items-center p-3 rounded-lg ${
                        pathname === item.link ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => handleItemClick(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="mr-4 text-xl">{item.icon}</span>
                      {item.name}
                    </motion.div>
                  </NavLink>
                </li>
              ))}
            </>
          )}
        </ul>
        {/* <LanguageSelector></LanguageSelector> */}
      </div>
    </div>
  );
};

export default Sidebar;
