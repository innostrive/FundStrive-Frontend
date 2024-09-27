import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useBlogsData = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosSecure.get("/posts").then((res) => {
      setUsers(res.data.data.posts);
    });
  }, []);
  return users;
};

export default useBlogsData;
