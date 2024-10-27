import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFaq = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  const { data: faq = [] } = useQuery({
    queryKey: ["faq-data"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=FAQ&status=Active`);
      return res.data.data.settings;
    },
  });
  return [faq];
};

export default useFaq;
