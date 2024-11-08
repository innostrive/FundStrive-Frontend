import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
// import { adminSidebarItems, userSidebarItems } from "./SidebarRoutes";
import { BsChevronDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getTranslationObject } from "../../../i18next";
import LanguageSelector from "../../client/components/LanguageSelector/LanguageSelector";
import {
  ContactIcon,
  ContactInfoIcon,
  GalleryIcon,
  InfoIcon,
  MenuIcon,
  MenuSettingsIcon,
  Privilege,
  Question,
  SliderIcon,
  TargetIcon,
  WebsiteIcon,
} from "../assets/icons/icons";
import AboutInfo from "../pages/AboutInfo/AboutInfo";
import { TbSocial } from "react-icons/tb";
import { MdWrapText } from "react-icons/md";
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const userRole = localStorage.getItem("role");
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();
  const { pathname } = location;
  const dashboardTranslations = getTranslationObject("dashboard");
  const sidebarRoutesName = dashboardTranslations.sidebarRoutesName;
  const {
    dashboard,
    users,
    category,
    campaign,
    blogs,
    systemSettings,
    navbarMenu,
    gallerySettings,
    userPrivilege,
    contactInfo,
    subscribers,
    faqSettings,
    aboutInfo,
    websiteLogo,
    footer,
    socialMedia,
  } = sidebarRoutesName || {};

  const handleItemClick = (id) => {
    setActiveItem(id);
    if (openSubmenu === id) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(id);
    }
  };

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

  const adminSidebarItems = [
    {
      id: 1,
      name: dashboard,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
      ),
      link: "/dashboard",
    },
    {
      id: 2,
      name: users,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          ></path>
        </svg>
      ),
      link: "/admin-dashboard/users",
    },
    {
      id: 3,
      name: category,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
          ></path>
        </svg>
      ),
      link: "/admin-dashboard/categories",
    },
    {
      id: 4,
      name: campaign,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          ></path>
        </svg>
      ),
      link: "/admin-dashboard/campaigns",
    },
    {
      id: 5,
      name: blogs,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          ></path>
        </svg>
      ),
      link: "/admin-dashboard/blogs",
    },
    {
      id: 6,
      name: systemSettings,
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>
      ),
      subMenus: [
        {
          name: navbarMenu,
          icon: <MenuIcon className="text-text-primary" />,
          link: "/admin-dashboard/navmenus",
        },
        // {
        //   name: "Top Navbar",
        //   icon: <MenuSettingsIcon className="text-white" />,
        //   link: "/admin-dashboard/top-navbar",
        // },
        {
          name: gallerySettings,
          icon: <SliderIcon className="text-white" />,
          link: "/admin-dashboard/banners",
        },
        // {
        //   name: "Partner Gallery",
        //   icon: <GalleryIcon className="text-white" />,
        //   link: "/admin-dashboard/partner-gallery",
        // },
        {
          name: userPrivilege,
          icon: <Privilege className="text-white" />,
          link: "/admin-dashboard/user-privilege",
        },
        {
          name: contactInfo,
          icon: <ContactInfoIcon />,
          link: "/admin-dashboard/contact-info",
        },
        {
          name: subscribers,
          icon: <ContactIcon />,
          link: "/admin-dashboard/subscribers-list",
        },
        {
          name: faqSettings,
          icon: <Question />,
          link: "/admin-dashboard/faq",
        },
        // {
        //   name: "About Campaign",
        //   icon: <InfoIcon />,
        //   link: "/admin-dashboard/about-settings",
        // },
        // {
        //   name: "About Vision",
        //   icon: <TargetIcon />,
        //   link: "/admin-dashboard/about-vision",
        // },
        {
          name: aboutInfo,
          icon: <Question />,
          link: "/admin-dashboard/about-info",
        },
        {
          name: websiteLogo,
          icon: <WebsiteIcon />,
          link: "/admin-dashboard/website-logo",
        },
        {
          name: footer,
          icon: <MdWrapText className="h-6 w-6 text-text-primary" />,
          link: "/admin-dashboard/footer",
        },
        {
          name: socialMedia,
          icon: <TbSocial className="h-6 w-6 text-text-primary" />,
          link: "/admin-dashboard/social-media",
        },
      ],
    },
  ];
  const userSidebarItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: (
        <svg
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="text-white size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></path>
        </svg>
      ),
      link: "/dashboard",
    },
  ];

  return (
    // <div
    //   ref={sidebar}
    //   className={`absolute left-0 top-0 z-[9999] flex min-h-screen h-auto md:w-62.5 lg:w-[304px] flex-col overflow-y-auto  bg-secondary duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
    //     sidebarOpen ? "translate-x-0" : "-translate-x-full z-[9999]"
    //   }`}
    // >
    //   <div className="flex space-x-5 sm:justify-center justify-between items-center p-5">
    //     <h1 className="text-3xl font-bold uppercase text-center text-text-primary">
    //       Fund<span className="text-primary">strive</span>
    //     </h1>
    //     <div className="sm:hidden">
    //       <motion.svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth="5"
    //         stroke="currentColor"
    //         className="size-8 text-white cursor-pointer"
    //         initial={{ rotate: false }}
    //         animate={{ rotate: sidebarOpen ? 90 : 0 }}
    //         transition={{ duration: 0.5 }}
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           setSidebarOpen(!sidebarOpen);
    //         }}
    //       >
    //         <motion.path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M6 18 18 6M6 6l12 12"
    //         />
    //       </motion.svg>
    //     </div>
    //   </div>
    //   <div className="w-64 h-full text-white p-4">
    //     <ul>
    //       {userRole === "admin" ? (
    //         <>
    //           {adminSidebarItems.map((item, i) => (
    //             <li key={item.id || i} className="cursor-pointer text-sm">
    //               {item.link ? (
    //                 <NavLink
    //                   key={i}
    //                   to={item?.link}
    //                   className={({ isActive }) =>
    //                     `flex items-center p-3 rounded-lg ${
    //                       isActive || location.pathname.startsWith(item?.link)
    //                         ? "bg-primary text-white"
    //                         : ""
    //                     }`
    //                   }
    //                   onClick={() => handleItemClick(item?.id)}
    //                 >
    //                   <motion.div
    //                     className="flex items-center"
    //                     whileHover={{ scale: 1.05 }}
    //                     whileTap={{ scale: 0.95 }}
    //                     transition={{ type: "spring", stiffness: 300 }}
    //                   >
    //                     <span className="mr-4 text-xl">{item?.icon}</span>
    //                     {item?.name}
    //                   </motion.div>
    //                 </NavLink>
    //               ) : (
    //                 <motion.div
    //                   key={i}
    //                   className="flex items-center p-3 rounded-lg cursor-pointer"
    //                   whileHover={{ scale: 1.05 }}
    //                   whileTap={{ scale: 0.95 }}
    //                   transition={{ type: "spring", stiffness: 300 }}
    //                   onClick={() => handleItemClick(item.id)}
    //                 >
    //                   <span className="mr-4 text-xl">{item?.icon}</span>
    //                   {item.name}
    //                   {item.subMenus && item.subMenus.length > 0 && (
    //                     <BsChevronDown
    //                       className={`text-xl transition-transform ml-4 ${
    //                         openSubmenu === item.id ? "rotate-180" : ""
    //                       }`}
    //                     />
    //                   )}
    //                 </motion.div>
    //               )}
    //               {item.subMenus && item.subMenus.length > 0 && (
    //                 <motion.ul
    //                   initial={false}
    //                   animate={{
    //                     height: openSubmenu === item?.id ? "auto" : 0,
    //                   }}
    //                   transition={{ type: "spring", stiffness: 200 }}
    //                   className="overflow-hidden"
    //                   key={item.id}
    //                 >
    //                   {item.subMenus.map((subItem) => (
    //                     <li key={subItem.id} className="px-2">
    //                       <NavLink
    //                         to={subItem.link}
    //                         className={({ isActive }) =>
    //                           `flex items-center rounded-lg ${
    //                             isActive ||
    //                             location.pathname.startsWith(subItem?.link)
    //                               ? "bg-primary text-white"
    //                               : ""
    //                           }`
    //                         }
    //                         onClick={() => handleItemClick(subItem?.id)}
    //                       >
    //                         <div className="flex items-center p-3 rounded-lg">
    //                           <span className="mr-2">{subItem.icon}</span>
    //                           {subItem.name}
    //                         </div>
    //                       </NavLink>
    //                     </li>
    //                   ))}
    //                 </motion.ul>
    //               )}
    //             </li>
    //           ))}
    //         </>
    //       ) : (
    //         <>
    //           {" "}
    //           {userSidebarItems.map((item, i) => (
    //             <li key={item.id || i} className="cursor-pointer text-sm">
    //               <NavLink to={item?.link}>
    //                 <motion.div
    //                   className={`flex items-center p-3 rounded-lg ${
    //                     pathname === item.link ? "bg-primary text-white" : ""
    //                   }`}
    //                   onClick={() => handleItemClick(item.id)}
    //                   whileHover={{ scale: 1.05 }}
    //                   whileTap={{ scale: 0.95 }}
    //                   transition={{ type: "spring", stiffness: 300 }}
    //                 >
    //                   <span className="mr-4 text-xl">{item.icon}</span>
    //                   {item.name}
    //                 </motion.div>
    //               </NavLink>
    //             </li>
    //           ))}
    //         </>
    //       )}
    //     </ul>
    //     {/* <LanguageSelector></LanguageSelector> */}
    //   </div>
    // </div>
    <div
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex min-h-screen h-auto md:w-62.5 lg:w-[304px] flex-col overflow-y-auto bg-secondary duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
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
                    <NavLink
                      key={item.id}
                      to={item?.link}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg ${
                          isActive || location.pathname.startsWith(item?.link)
                            ? "bg-primary text-white"
                            : ""
                        }`
                      }
                      onClick={() => handleItemClick(item?.id)}
                    >
                      <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="mr-4 text-xl">{item?.icon}</span>
                        {item?.name}
                      </motion.div>
                    </NavLink>
                  ) : (
                    <motion.div
                      key={item.id}
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
                      key={`${item.id}-submenu`}
                      initial={false}
                      animate={{
                        height: openSubmenu === item?.id ? "auto" : 0,
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="overflow-hidden"
                    >
                      {item.subMenus.map((subItem) => (
                        <li key={subItem.id} className="px-2">
                          <NavLink
                            to={subItem.link}
                            className={({ isActive }) =>
                              `flex items-center rounded-lg ${
                                isActive ||
                                location.pathname.startsWith(subItem?.link)
                                  ? "bg-primary text-white"
                                  : ""
                              }`
                            }
                            onClick={() => handleItemClick(subItem?.id)}
                          >
                            <div className="flex items-center p-3 rounded-lg">
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
      </div>
    </div>
  );
};

export default Sidebar;
