import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCampaignsInfo = (id) => {
  const axiosSecure = useAxiosSecure();
  const [campaign, setCampaign] = useState({});
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      setCampaign(res.data.data);
    });
  }, [id]);
  return campaign;
};

export default useCampaignsInfo;
