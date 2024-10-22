import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useAboutVisionData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { data: vision = [] } = useQuery({
    queryKey: ["vision"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=VISION`);
      return res.data.data.settings;
    },
  });
  return [vision];
};

export default useAboutVisionData;
