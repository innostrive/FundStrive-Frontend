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
import AboutCampaignSettings from "../AboutCampaignSettings/AboutCampaignSettings";
import AboutVision from "../AboutVision/AboutVison";
import AboutHeaderInfo from "../AboutDetails/AboutHeaderInfo";
import AboutMissionInfo from "../AboutDetails/AboutMissionInfo";
import FormCard from "../../ui/FormCard";
import AboutIntro from "../AboutIntro/AboutIntro";
const AboutInfo = () => {
  const data = [
    {
      label: "Campaign Settings",
      value: "campaign",
      icon: SliderIcon,
      desc: <AboutCampaignSettings />,
    },
    {
      label: "About Intro",
      value: "intro",
      icon: GalleryIcon,
      desc: <AboutIntro />,
    },
    {
      label: "About Vision",
      value: "vision",
      icon: GalleryIcon,
      desc: <AboutVision />,
    },
    {
      label: "About Header Info",
      value: "header",
      icon: SliderIcon,
      desc: <AboutHeaderInfo />,
    },
    {
      label: "About Mision",
      value: "mission",
      icon: GalleryIcon,
      desc: <AboutMissionInfo />,
    },
  ];
  return (
    <FormCard>
      <Tabs value="campaign" className="bg-white">
        <TabsHeader className="relative w-full bg-gray-300">
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

export default AboutInfo;
