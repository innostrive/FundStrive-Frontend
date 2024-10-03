import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCampaignData = () => {
  const axiosSecure = useAxiosSecure();
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    axiosSecure.get("/campaigns").then((res) => {
      setCampaigns(res.data.data.campaigns);
    });
  }, []);
  return { campaigns, setCampaigns };
};

export default useCampaignData;
