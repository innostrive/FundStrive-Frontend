import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserDetailInfo from "./UserDetailInfo";

const UserDetails = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${id}`).then((res) => {
      setUserInfo(res.data.data);
      console.log("user:", res.data.data);
    });
  }, [id]);
  return (
    <section>
      <UserDetailInfo userInfo={userInfo} />
    </section>
  );
};

export default UserDetails;
