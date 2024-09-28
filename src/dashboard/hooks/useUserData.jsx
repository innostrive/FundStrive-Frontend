import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
  const [userInfo, setUserInfo] = useState({});
  const userId = localStorage.getItem("userId");

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setUserInfo(res.data.data);
    });
  }, [userId]);
  return userInfo;
};

export default useUserData;
