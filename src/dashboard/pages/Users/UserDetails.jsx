import { NavLink, useLocation, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import UserDetailInfo from "./UserDetailInfo";
import UserProfile from "./UserProfile";
import { Breadcrumbs } from "@material-tailwind/react";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const UserDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const dashboardTranslations = getTranslationObject("dashboard");
  const { userInformation, users, userDetails } =
    dashboardTranslations.dashboardTitle;
  const [userInfo, setUserInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${id}`).then((res) => {
      setUserInfo(res.data.data);
    });
  }, [id]);
  return (
    <DashboardLayout>
      <section className="space-y-5">
        <Breadcrumbs className="bg-gray-400 bg-opacity-30">
          <NavLink to="/admin-dashboard/users" className="opacity-60">
            {users}
          </NavLink>
          <span className="cursor-context-menu">{userDetails}</span>
        </Breadcrumbs>
        <UserProfile userInfo={userInfo} />
        <UserDetailInfo userInfo={userInfo} userInformation={userInformation} />
      </section>
    </DashboardLayout>
  );
};

export default UserDetails;
