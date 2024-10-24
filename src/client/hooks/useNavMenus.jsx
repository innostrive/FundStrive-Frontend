import { useEffect, useState } from "react";
import axios from "axios";

const useNavMenus = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [navmenues, setNavMenues] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/settings?slug=NAVMENU`).then((res) => {
      console.log("nav:", res.data.data);
      setNavMenues(res.data.data.settings);
    });
  }, []);
  // console.log("navmenu:", navmenues);

  return navmenues;
};

export default useNavMenus;
