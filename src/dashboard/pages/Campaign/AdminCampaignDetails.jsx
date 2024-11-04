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
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import CampaignGallery from "./CampaignGallery";
import CampaignDocuments from "./CampaignDocuments";
import FormCard from "../../ui/FormCard";
import {
  CampaignIcon,
  GalleryIcon,
  DocumentIcon,
} from "../../assets/icons/icons";
import DashboardLayout from "../../layout/DashboardLayout";
const AdminCampaignDetails = () => {
  const { id } = useParams();
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
      label: "Campaign List",
      value: "dashboard",
      icon: CampaignIcon,
      desc: (
        <CampaignInfo
          campaignInfo={campaignInfo}
          category={category}
          setCategory={setCategory}
          campaignReviews={campaignReviews}
        />
      ),
    },
    {
      label: "Gallery List",
      value: "profile",
      icon: GalleryIcon,
      desc: <CampaignGallery id={id} campaignName={campaignInfo?.title} />,
    },
    {
      label: "Document List",
      value: "settings",
      icon: DocumentIcon,
      desc: <CampaignDocuments id={id} campaignName={campaignInfo?.title} />,
    },
  ];
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/campaigns" className="opacity-60">
          Campaigns
        </NavLink>
        <span className="cursor-context-menu">Campaign Details</span>
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
