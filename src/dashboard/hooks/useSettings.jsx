import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSetting = () => {
  const axiosSecure = useAxiosSecure();
  const [settings, setSettings] = useState([]);
  useEffect(() => {
    axiosSecure.get("/banners").then((res) => {
      setSettings(res.data.data.settings);
    });
  }, []);
  return settings;
};

export default useSetting;
