import { NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserDetailInfo from "./UserDetailInfo";
import UserProfile from "./UserProfile";
import { Breadcrumbs } from "@material-tailwind/react";
import DashboardLayout from "../../layout/DashboardLayout";

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
    <DashboardLayout>
      <section className="space-y-5">
        <Breadcrumbs className="bg-gray-400 bg-opacity-30">
          <NavLink to="/admin-dashboard/users" className="opacity-60">
            Users
          </NavLink>
          <span className="cursor-context-menu">User Details</span>
        </Breadcrumbs>
        <UserProfile userInfo={userInfo} />
        <UserDetailInfo userInfo={userInfo} />
      </section>
    </DashboardLayout>
  );
};

export default UserDetails;
