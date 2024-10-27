import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../dashboard/hooks/useAxiosSecure";

const useContactCount = () => {
  const axiosSecure = useAxiosSecure();
  const { data: count } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/dashboard/count-data?&status=Active`
      );
      return res.data.data;
    },
  });
  return count;
};

export default useContactCount;
