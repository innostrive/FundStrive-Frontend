import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useBanner = () => {
  const axiosSecure = useAxiosSecure();
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    axiosSecure.get("/banners").then((res) => {
      setBanners(res.data.data.banners);
    });
  }, []);
  return banners;
};

export default useBanner;
