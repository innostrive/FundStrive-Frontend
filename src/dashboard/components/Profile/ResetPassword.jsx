import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import Form from "../form/Form";
import { useForm } from "react-hook-form";

const ResetPassword = ({ userInfo }) => {
  const [edit, setEdit] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  // const [userInfo, setUserInfo] = useState({});

  // const userId = localStorage.getItem("userId");

  const onSubmit = (data) => {
    axios.post("http://localhost:4000/reset-password", data).then((res) => {
      if (res.status === 200) {
        toast.success("Password Reset Successfull...");
      } else {
        toast.error(res.data.message);
      }
    });
    console.log(data);
  };

  return (
    <FormCard
      title="Reset Password"
      icon={
        <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 justify-between gap-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm">
                  New Password
                </label>
                <input
                  type="password"
                  // defaultValue={userInfo?.name}
                  disabled={edit ? false : true}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                  {...register("new_password")}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  disabled={edit ? false : true}
                  //   value="email@gmail.com"
                  // defaultValue={userInfo?.email}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                  {...register("confirm_password")}
                />
              </div>
            </div>
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
      </form>
    </FormCard>
  );
};

export default ResetPassword;
