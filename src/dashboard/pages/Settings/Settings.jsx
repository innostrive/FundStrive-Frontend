import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import MenuSettings from "./MenuSettings";
import TopNavbarInfo from "./TopNavbarInfo/TopNavbarInfo";
import FormCard from "../../ui/FormCard";
import { MenuIcon, MenuSettingsIcon } from "../../assets/icons/icons";
import DashboardLayout from "../../layout/DashboardLayout";
const Settings = () => {
  const data = [
    {
      label: "Navbar Menus",
      value: "dashboard",
      icon: MenuIcon,
      desc: <MenuSettings />,
    },
    {
      label: "Top Navbar Menu",
      value: "profile",
      icon: MenuSettingsIcon,
      desc: <TopNavbarInfo />,
    },
  ];
  return (
    <DashboardLayout>
      <FormCard>
        <Tabs value="dashboard" className="bg-white">
          <TabsHeader className="relative w-1/3 bg-gray-300">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="px-0">
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </FormCard>
    </DashboardLayout>
  );
};

export default Settings;
