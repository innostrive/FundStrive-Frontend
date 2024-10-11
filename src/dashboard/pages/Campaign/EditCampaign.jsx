import EditCampaignInfo from "../../components/CampaignInfo/EditCampaignInfo";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useReviewData from "../../hooks/useReviewData";
import axios from "axios";
import { toast } from "react-toastify";

const EditCampaign = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [reviews, refetch] = useReviewData();
  const URL = import.meta.env.VITE_BASE_URL;
  const [campaignInfo, setCampaignInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      const userData = res.data.data;
      setCampaignInfo(userData);
      setSelectedCategory(userData?.category);
      setCampaignDescription(userData?.description);
    });
  }, [id, axiosSecure]);

  const campaignReviews = reviews.filter((item) => item.campaign_id === id);
  console.log("capaignReviews:", campaignReviews);
  const handleDelete = async (id) => {
    console.log("id:", id);
    const data = {
      ids: [id],
    };
    await axios.delete(`${URL}/reviews`, { data }).then((res) => {
      if (res.status === 200) {
        toast.success("Comment deleted...");
        refetch();
      }
    });
  };
  return (
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
  );
};

export default EditCampaign;
