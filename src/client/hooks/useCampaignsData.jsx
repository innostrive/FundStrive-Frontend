import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCampaignsData = () => {
  const axiosSecure = useAxiosSecure();
  const [campaigns, setUsers] = useState([]);
  useEffect(() => {
    axiosSecure.get("/campaigns").then((res) => {
      setUsers(res.data.data.campaigns);
    });
  }, []);
  return campaigns;
};

export default useCampaignsData;
