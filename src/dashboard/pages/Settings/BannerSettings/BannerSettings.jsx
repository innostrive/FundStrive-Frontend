import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import BannerSettingsList from "../../../components/Settings/BannerSettings/BannerSettingsList";
import FormCard from "../../../ui/FormCard";
import PartnerGallery from "../../PartnerGallery/PartnerGallery";
import {
  GalleryIcon,
  SliderIcon,
  DocumentIcon,
} from "../../../assets/icons/icons";
import CaruselTitle from "../CaruselTitle/CaruselTitle";
import DashboardLayout from "../../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../../i18next";
const BannerSettings = () => {
  const dashboardTranslations = getTranslationObject("dashboard");
  const { headerCarusel, title } = dashboardTranslations.carusel;
  const data = [
    {
      label: headerCarusel,
      value: "dashboard",
      icon: SliderIcon,
      desc: <BannerSettingsList />,
    },
    {
      label: title,
      value: "title",
      icon: DocumentIcon,
      desc: <CaruselTitle />,
    },
    {
      label: "Partner Gallery",
      value: "profile",
      icon: GalleryIcon,
      desc: <PartnerGallery />,
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

export default BannerSettings;
