import EditCampaignInfo from "../../components/CampaignInfo/EditCampaignInfo";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const EditCampaign = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
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

  return (
    <EditCampaignInfo
      campaignInfo={campaignInfo}
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      campaignDescription={campaignDescription}
      setCampaignDescription={setCampaignDescription}
    />
  );
};

export default EditCampaign;
