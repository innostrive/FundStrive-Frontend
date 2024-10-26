import { NavLink, useLocation, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserDetailInfo from "./UserDetailInfo";
import UserProfile from "./UserProfile";
import { Breadcrumbs } from "@material-tailwind/react";

const UserDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  console.log("pathname:", pathname);
  const [userInfo, setUserInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${id}`).then((res) => {
      setUserInfo(res.data.data);
      console.log("user:", res.data.data);
    });
  }, [id]);
  return (
    <section className="space-y-5">
      <Breadcrumbs>
        <NavLink to="/dashboard/users" className="opacity-60">
          Home
        </NavLink>
        <span className="cursor-context-menu">User Details</span>
      </Breadcrumbs>
      <UserProfile userInfo={userInfo} />
      <UserDetailInfo userInfo={userInfo} />
    </section>
  );
};

export default UserDetails;
