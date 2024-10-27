import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFooterLogo = () => {
  const axiosSecure = useAxiosSecure();
  const { data: footerLogo = [] } = useQuery({
    queryKey: ["footerLogo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners?slug=FOOTER_LOGO");
      return res.data.data.banners;
    },
  });

  return [footerLogo];
};

export default useFooterLogo;
