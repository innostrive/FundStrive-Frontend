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
import Campaigns from "./Campaigns";
import CampaignGallery from "./CampaignGallery";
import CampaignDocuments from "./CampaignDocuments";
import FormCard from "../../ui/FormCard";

const Campaign = () => {
  const data = [
    {
      label: "Campaign List",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: <Campaigns />,
    },
    {
      label: "Gallery List",
      value: "profile",
      icon: UserCircleIcon,
      desc: <CampaignGallery />,
    },
    {
      label: "Document List",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: <CampaignDocuments />,
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

export default Campaign;
