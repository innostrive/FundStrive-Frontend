import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CampaignInfo from "../../components/CampaignInfo/CampaignInfo";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";

const CategoryDetails = () => {
  const { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/categories/${id}`).then((res) => {
      setCategoryInfo(res.data.data);
    });
  }, []);
  return <CategoryInfo categoryInfo={categoryInfo} />;
};

export default CategoryDetails;
