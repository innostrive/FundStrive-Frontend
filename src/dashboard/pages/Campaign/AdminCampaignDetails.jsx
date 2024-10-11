import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CampaignInfo from "../../components/CampaignInfo/CampaignInfo";
import useReviewData from "../../hooks/useReviewData";

const AdminCampaignDetails = () => {
  const { id } = useParams();
  const [reviews] = useReviewData();
  const [campaignInfo, setCampaignInfo] = useState({});
  const [category, setCategory] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      setCampaignInfo(res.data.data);
      setCategory(res.data.data.category);
    });
  }, []);

  const campaignReviews = reviews.filter((item) => item.campaign_id === id);
  return (
    <CampaignInfo
      campaignInfo={campaignInfo}
      category={category}
      setCategory={setCategory}
      campaignReviews={campaignReviews}
    />
  );
};

export default AdminCampaignDetails;
