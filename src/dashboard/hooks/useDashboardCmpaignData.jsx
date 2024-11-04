import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useDashboardCampaignData = () => {
  const axiosSecure = useAxiosSecure();
  const [series, setSeries] = useState([]);
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    axiosSecure
      .get("/api/dashboard/get-category-wise-campaign-data")
      .then((res) => {
        setSeries(res.data.data.series);
        setLevels(res.data.data.series);
      });
  }, []);
  return [series, levels];
};

export default useDashboardCampaignData;
