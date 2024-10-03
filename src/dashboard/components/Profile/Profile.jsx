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

  const userId = localStorage.getItem("userId");

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setUserInfo(res.data.data);
    });
  }, [userId]);
  return (
    <section className="p-5 space-y-5">
      {/* <div className="my-5">
        <h1 className="text-xl font-medium text-gray-900 leading-normal">
          Account Settings
        </h1>
      </div>
      <div className="rounded-lg border border-gray-300 h-auto w-full p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="rounded-full size-20 object-cover"
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium text-black">
                {userInfo?.name}
              </span>
              <span className="text-sm font-normal text-black">
                {userInfo?.state},{userInfo?.country}
              </span>
            </div>
          </div>
          <Edit className="size-6 text-gray-700" />
        </div>
      </div> */}
      <MyProfile />
      {/* <div className="rounded-lg border border-gray-300 h-auto w-full px-5 py-10">
        <div className="mb-10">
          <h1 className="text-xl font-medium text-gray-900 leading-normal">
            Personal Information
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 justify-between gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Name
                </label>
                <input
                  disabled={edit ? false : true}
                  value=""
                  defaultValue={userInfo?.name}
                  className={`${
                    edit
                      ? "p-2 border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  disabled
                  //   value="email@gmail.com"
                  defaultValue={userInfo?.email}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Phone
                </label>
                <input
                  disabled
                  //   value="+88065556555"
                  defaultValue={userInfo?.phone_number}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Status
                </label>
                <input
                  disabled
                  //   value="Active"
                  defaultValue={userInfo?.status}
                  className="mt-2 text-lg bg-white"
                />
              </div>
            </div>
          </div>
          <div onClick={() => setEdit(true)} className="cursor-pointer">
            <Edit className="size-6 text-gray-700" />
          </div>
        </div>
        {edit ? (
          <div className="my-5 flex gap-5 justify-end">
            <IButton>Update</IButton>
            <Button className="bg-red-400" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </div>
        ) : null}
      </div> */}
      <PersonalInfo />
      {/* <div className="rounded-lg border border-gray-300 h-auto w-full px-5 py-10">
        <div className="mb-10">
          <h1 className="text-xl font-medium text-gray-900 leading-normal">
            Address
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 justify-between gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Address
                </label>
                <input
                  disabled
                  //   value="Jon Doe"
                  defaultValue={userInfo?.address}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Country
                </label>
                <input
                  disabled
                  //  value="USA"
                  defaultValue={userInfo?.country}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  State
                </label>
                <input
                  disabled
                  //   value="New Yourk"
                  defaultValue={userInfo?.state}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  City
                </label>
                <input
                  disabled
                  //   value="Town"
                  defaultValue={userInfo?.city}
                  className="mt-2 text-lg bg-white"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Post Code
                </label>
                <input
                  disabled
                  //   value="22222"
                  defaultValue={userInfo?.post_code}
                  className="mt-2 text-lg bg-white"
                />
              </div>
            </div>
          </div>
          <Edit className="size-6 text-gray-700" />
        </div>
      </div> */}
      <Address />
      <ResetPassword userInfo={userInfo} />
    </section>
  );
};

export default Profile;
