import { useEffect, useState } from "react";
import axios from "axios";

const useBlogDetails = (id) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/posts/${id}`).then((res) => {
      setBlog(res.data.data);
    });
  }, [id]);
  return blog;
};

export default useBlogDetails;
