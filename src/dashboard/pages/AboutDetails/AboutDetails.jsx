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
import FormCard from "../../ui/FormCard";
import AboutHeaderInfo from "./AboutHeaderInfo";
import AboutMissionInfo from "./AboutMissionInfo";

const AboutDetails = () => {
  const data = [
    {
      label: "About Header",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <AboutHeaderInfo />,
    },
    {
      label: "About Mision",
      value: "profile",
      icon: UserCircleIcon,
      desc: <AboutMissionInfo />,
    },
  ];
  return (
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
  );
};

export default AboutDetails;
