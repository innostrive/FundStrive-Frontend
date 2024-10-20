import { useEffect, useState } from "react";
import axios from "axios";

const useNavMenus = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [navmenues, setNavMenues] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/settings`).then((res) => {
      setNavMenues(res.data.data.settings);
    });
  }, []);
  // console.log("navmenu:", navmenues);

  return navmenues;
};

export default useNavMenus;
