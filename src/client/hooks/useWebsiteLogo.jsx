import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWebsiteLogo = () => {
  const axiosSecure = useAxiosSecure();
  const { data: logo = [] } = useQuery({
    queryKey: ["logo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners?slug=Logo");
      return res.data.data.banners;
    },
  });

  return [logo];
};

export default useWebsiteLogo;
