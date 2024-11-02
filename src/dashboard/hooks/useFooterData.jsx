import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFooterData = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  const { data: footerData = [] } = useQuery({
    queryKey: ["footerData"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=FOOTER`);
      return res.data.data.settings;
    },
  });

  return footerData;
};

export default useFooterData;
