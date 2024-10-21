import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAboutActivitySettings = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  const { data: aboutActivity = [] } = useQuery({
    queryKey: ["aboutActivity"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=ACTIVITIES`);
      return res.data.data.settings;
    },
  });
  return [aboutActivity];
};

export default useAboutActivitySettings;
