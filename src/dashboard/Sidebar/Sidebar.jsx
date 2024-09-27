import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { adminSidebarItems, userSidebarItems } from "./SidebarRoutes";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const collapse = () => {
    setSidebarToggle((prev) => !prev);
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const userRole = localStorage.getItem("role");

  return (
    <motion.div
      className={`bg-[#2B2A27] min-h-screen h-auto`}
      initial={{ translateX: sidebarToggle ? 0 : 0 }}
      animate={{ translateX: sidebarToggle ? -220 : 0 }}
      transition={{ type: "just", ease: "linear", duration: 0.3 }}
    >
      <div className="grid place-content-end p-2">
        {sidebarToggle ? (
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
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white cursor-pointer"
            onClick={collapse}
            initial={{ rotate: false }}
            animate={{ rotate: collapse ? -180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </motion.svg>
        )}
      </div>
      <div className="w-64 h-full text-white p-4">
        <ul>
          {userRole === "admin" ? (
            <>
              {" "}
              {adminSidebarItems.map((item) => (
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
