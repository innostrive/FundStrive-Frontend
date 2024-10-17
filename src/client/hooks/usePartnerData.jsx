import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePartnerData = () => {
  const axiosSecure = useAxiosSecure();
  const { data: partners = [] } = useQuery({
    queryKey: ["partners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners");
      return res.data.data.banners;
    },
  });

  return [partners];
};

export default usePartnerData;
