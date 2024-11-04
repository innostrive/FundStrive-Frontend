import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSocialMediaData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { data: socialMediaLink = [] } = useQuery({
    queryKey: ["socialMediaLink"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=SOCIAL_LINK`);
      return res.data.data.settings;
    },
  });

  return [socialMediaLink];
};

export default useSocialMediaData;
