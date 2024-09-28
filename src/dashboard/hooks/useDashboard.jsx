import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [dashboards, setDashboards] = useState([]);
  useEffect(() => {
    axiosSecure.get("/dashboard/count-data").then((res) => {
      setDashboards(res.data.data.dashboard);
    });
  }, []);
  return dashboards;
};

export default useDashboard;
