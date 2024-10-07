import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useBlogsData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/posts`).then((res) => {
      setBlogs(res.data.data.posts);
    });
  }, []);
  return { blogs, setBlogs };
};

export default useBlogsData;
