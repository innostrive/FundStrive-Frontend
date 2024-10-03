import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CampaignInfo from "../../components/CampaignInfo/CampaignInfo";

const AdminCampaignDetails = () => {
  const { id } = useParams();
  const [campaignInfo, setCampaignInfo] = useState({});
  const [category, setCategory] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      setCampaignInfo(res.data.data);
      setCategory(res.data.data.category);
    });
  }, []);

  // fetch category
  // const categoryId = campaignInfo?.category;
  // useEffect(() => {
  //   axiosSecure.get(`/categories/${categoryId}`).then((res) => {
  //     setCategory(res.data.data);
  //   });
  // }, [categoryId]);
  return (
    <CampaignInfo
      campaignInfo={campaignInfo}
      category={category}
      setCategory={setCategory}
    />
  );
};

export default AdminCampaignDetails;
