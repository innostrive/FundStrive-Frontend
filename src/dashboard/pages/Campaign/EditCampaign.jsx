import EditCampaignInfo from "../../components/CampaignInfo/EditCampaignInfo";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const EditCampaign = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [campaignInfo, setCampaignInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      const userData = res.data.data;
      setCampaignInfo(userData);
      selectedCategory(userData);
      console.log("category:", userData.category);
    });
  }, [id, axiosSecure]);

  return (
    <EditCampaignInfo
      campaignInfo={campaignInfo}
      selectedStatus={selectedStatus}
      setSelectedStatus={selectedStatus}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default EditCampaign;
