import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useSetting = () => {
  const [settings, setSettings] = useState([]);
  useEffect(() => {
    axios.get("/api/settings").then((res) => {
      setSettings(res.data.data.settings);
    });
  }, []);
  return { settings, setSettings };
};

export default useSetting;
