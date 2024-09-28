import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useBlogDetails = (id) => {
  const axiosSecure = useAxiosSecure();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/posts/${id}`).then((res) => {
      setBlog(res.data.data);
    });
  }, []);
  return blog;
};

export default useBlogDetails;
