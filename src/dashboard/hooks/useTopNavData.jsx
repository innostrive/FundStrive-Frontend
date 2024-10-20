import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useTopNavData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();

  const { refetch, data: topnavInfo = [] } = useQuery({
    queryKey: ["topnavInfo"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=NAVINFO`);
      return res.data.data.settings;
    },
  });
  return [topnavInfo];
};

export default useTopNavData;
