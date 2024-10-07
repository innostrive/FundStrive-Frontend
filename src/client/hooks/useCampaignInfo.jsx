import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useCampaignsInfo = (id) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [campaign, setCampaign] = useState({});
  useEffect(() => {
    axios.get(`${URL}/campaigns/${id}`).then((res) => {
      setCampaign(res.data.data);
    });
  }, [id]);
  return campaign;
};

export default useCampaignsInfo;
