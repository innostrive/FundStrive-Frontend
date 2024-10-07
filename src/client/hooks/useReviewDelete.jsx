import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReviewDelete = (id) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const deletedId = {
    ids: [id],
  };
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.delete(`${URL}/reviews`, { deletedId });
      return res.data.data.reviews;
    },
  });
  return [reviews, refetch];
};

export default useReviewDelete;
