import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useBlogsData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { refetch, data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/posts`);
      return res.data.data.posts;
    },
  });
  return [blogs, refetch];
};

export default useBlogsData;
