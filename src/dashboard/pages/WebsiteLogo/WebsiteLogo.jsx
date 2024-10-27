import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { GalleryIcon, SliderIcon } from "../../assets/icons/icons";

import NavbarLogo from "./NavbarLogo";
import FooterLogo from "./FooterLogo";
import FormCard from "../../ui/FormCard";
const WebsiteLogo = () => {
  const data = [
    {
      label: "Navbar Logo",
      value: "navbar",
      icon: SliderIcon,
      desc: <NavbarLogo />,
    },
    {
      label: "Footer Logo",
      value: "footer",
      icon: GalleryIcon,
      desc: <FooterLogo />,
    },
  ];
  return (
    <FormCard>
      <Tabs value="navbar" className="bg-white">
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
  );
};

export default WebsiteLogo;
