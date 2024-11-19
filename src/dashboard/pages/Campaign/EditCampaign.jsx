import EditCampaignInfo from "../../components/CampaignInfo/EditCampaignInfo";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { NavLink, useParams } from "react-router-dom";
import useReviewData from "../../hooks/useReviewData";
import axios from "axios";
import { toast } from "react-toastify";
import DashboardLayout from "../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const EditCampaign = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [reviews, refetch] = useReviewData();
  const URL = import.meta.env.VITE_BASE_URL;
  const [campaignInfo, setCampaignInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const dashboardTranslations = getTranslationObject("dashboard");
  const { updateCampaign, campaigns, commentDeleted } =
    dashboardTranslations.dashboardTitle;
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      const userData = res.data.data;
      setCampaignInfo(userData);
      setSelectedCategory(userData?.category);
      setCampaignDescription(userData?.description);
    });
  }, [id, axiosSecure]);

  const campaignReviews = reviews.filter((item) => item.campaign_id === id);
  const handleDelete = async (id) => {
    const data = {
      ids: [id],
    };
    await axios.delete(`${URL}/reviews`, { data }).then((res) => {
      if (res.status === 200) {
        toast.success(commentDeleted);
        refetch();
      }
    });
  };
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/campaigns" className="opacity-60">
          {campaigns}
        </NavLink>
        <span className="cursor-context-menu">{updateCampaign}</span>
      </Breadcrumbs>
      <EditCampaignInfo
        campaignInfo={campaignInfo}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        campaignDescription={campaignDescription}
        setCampaignDescription={setCampaignDescription}
        campaignReviews={campaignReviews}
        handleDelete={handleDelete}
      />
    </DashboardLayout>
  );
};

export default EditCampaign;
