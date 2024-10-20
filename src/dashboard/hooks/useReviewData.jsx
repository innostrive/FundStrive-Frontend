import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useReviewData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/reviews`);
      // console.log("review:", res);
      return res.data.data.reviews;
    },
  });
  return [reviews, refetch];
};

export default useReviewData;
