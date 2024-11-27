import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useVolunteerData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();
  const { data: volunteerData = [] } = useQuery({
    queryKey: ["volunteer-data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/volunteer`);
      return res.data.data;
    },
  });
  return [volunteerData];
};

export default useVolunteerData;
