import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useBlogsData = () => {
  const axiosSecure = useAxiosSecure();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosSecure.get("/posts").then((res) => {
      setBlogs(res.data.data.posts);
    });
  }, []);
  return { blogs, setBlogs };
};

export default useBlogsData;
