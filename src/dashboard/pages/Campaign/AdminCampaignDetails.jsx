import { NavLink, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CampaignInfo from "../../components/CampaignInfo/CampaignInfo";
import useReviewData from "../../hooks/useReviewData";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Breadcrumbs,
} from "@material-tailwind/react";

import CampaignGallery from "./CampaignGallery";
import CampaignDocuments from "./CampaignDocuments";
import FormCard from "../../ui/FormCard";
import {
  CampaignIcon,
  GalleryIcon,
  DocumentIcon,
} from "../../assets/icons/icons";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";
const AdminCampaignDetails = () => {
  const { id } = useParams();
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    campaignList,
    galleryList,
    documentList,
    campaigns,
    campaignInformation,
    upload,
  } = dashboardTranslations.dashboardTitle;
  const { imageTableHeading, actionTable } = dashboardTranslations.form;
  const [reviews] = useReviewData();
  const [campaignInfo, setCampaignInfo] = useState({});
  const [category, setCategory] = useState();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      setCampaignInfo(res.data.data);
      setCategory(res.data.data.category);
    });
  }, []);

  const campaignReviews = reviews.filter((item) => item.campaign_id === id);

  const data = [
    {
      label: campaignList,
      value: "dashboard",
      icon: CampaignIcon,
      desc: (
        <CampaignInfo
          campaignInfo={campaignInfo}
          category={category}
          setCategory={setCategory}
          campaignReviews={campaignReviews}
          campaignInformation={campaignInformation}
        />
      ),
    },
    {
      label: galleryList,
      value: "profile",
      icon: GalleryIcon,
      desc: (
        <CampaignGallery
          id={id}
          campaignName={campaignInfo?.title}
          galleryList={galleryList}
          upload={upload}
          imageTableHeading={imageTableHeading}
          actionTable={actionTable}
        />
      ),
    },
    {
      label: documentList,
      value: "settings",
      icon: DocumentIcon,
      desc: (
        <CampaignDocuments
          id={id}
          campaignName={campaignInfo?.title}
          documentList={documentList}
          upload={upload}
        />
      ),
    },
  ];
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/campaigns" className="opacity-60">
          {campaigns}
        </NavLink>
        <span className="cursor-context-menu">{campaignInformation}</span>
      </Breadcrumbs>
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

export default AdminCampaignDetails;
