import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCampaignGallery = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { data: gallery = [] } = useQuery({
    queryKey: ["campaign-gallery"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/campaigns/asset?type=image`);
      console.log("gallery:", res.data.data);
      return res.data.data;
    },
  });
  return [gallery];
};

export default useCampaignGallery;
