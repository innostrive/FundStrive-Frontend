import { useEffect, useState } from "react";
import axios from "axios";

const useSettings = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/settings`).then((res) => {
      setSettings(res.data.data.settings);
    });
  }, []);
  return { settings, setSettings };
};

export default useSettings;
