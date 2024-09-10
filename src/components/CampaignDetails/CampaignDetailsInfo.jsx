import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { RiDashboardLine } from "react-icons/ri";
import donate from "../../assets/donate-1.jpg";
import Gallery from "./Gallery";
import Document from "./Document";

const CampaignDetailsInfo = () => {
  const data = [
    {
      label: "Description",
      value: "description",
      icon: RiDashboardLine,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Gallery",
      value: "gallery",
      icon: RiDashboardLine,
      desc: <Gallery />,
    },
    {
      label: "Document",
      value: "document",
      icon: RiDashboardLine,
      desc: <Document />,
    },
  ];
  return (
    <section>
      <div>
        <img src={donate} alt="" className="h-80 w-full object-cover" />
      </div>
      <Tabs value="description" className="my-5">
        <TabsHeader className="border border-gray-200 bg-white">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2 uppercase">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
export default CampaignDetailsInfo;
