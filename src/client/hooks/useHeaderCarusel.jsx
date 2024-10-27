import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useHeaderCarusel = () => {
  const axiosSecure = useAxiosSecure();
  const { data: carusel = [] } = useQuery({
    queryKey: ["header-carusel"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/banners?slug=HEADER_CARUSEL&status=Active"
      );
      return res.data.data.banners;
    },
  });

  return [carusel];
};

export default useHeaderCarusel;
