import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUsersData = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosSecure.get("/api/users").then((res) => {
      setUsers(res.data.data.users);
    });
  }, []);
  return users;
};

export default useUsersData;
