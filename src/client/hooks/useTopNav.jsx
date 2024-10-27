import { useEffect, useState } from "react";
import axios from "axios";

const useTopNav = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [navmenues, setNavMenues] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/settings?slug=NAVINFO&status=Active`).then((res) => {
      setNavMenues(res.data.data.settings);
    });
  }, []);

  return navmenues;
};

export default useTopNav;
