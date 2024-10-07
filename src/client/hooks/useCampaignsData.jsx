import { useEffect, useState } from "react";
import axios from "axios";

const useCampaignsData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/campaigns`).then((res) => {
      setCampaigns(res.data.data.campaigns);
    });
  }, []);
  console.log("campaign:", campaigns);
  return campaigns;
};

export default useCampaignsData;
