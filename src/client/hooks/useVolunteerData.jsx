import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useVolunteerData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();
  const { data: volunteer = [] } = useQuery({
    queryKey: ["volunteer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/users?role=volunteer`);
      return res.data.data.users;
    },
  });
  return [volunteer];
};

export default useVolunteerData;
