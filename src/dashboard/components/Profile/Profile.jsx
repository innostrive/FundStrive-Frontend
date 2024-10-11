import { Button, Input } from "@material-tailwind/react";
import { Edit } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import IButton from "../../ui/IButton";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import MyProfile from "./MyProfile";
import ResetPassword from "./ResetPassword";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState();
  const userId = localStorage.getItem("userId");

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setUserInfo(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, [userId]);
  return (
    <section className="p-5 space-y-5">
      <MyProfile userInfo={userInfo} />
      <PersonalInfo
        userInfo={userInfo}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <Address userInfo={userInfo} />
      {/* <ResetPassword userInfo={userInfo} /> */}
    </section>
  );
};

export default Profile;
