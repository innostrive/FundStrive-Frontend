import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useReview = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/reviews?&status=Active`);
      return res.data.data.reviews;
    },
  });
  return [reviews, refetch];
};

export default useReview;
