import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const PersonalInfo = ({ userInfo, selectedStatus, setSelectedStatus }) => {
  const [edit, setEdit] = useState(false);
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const userId = localStorage.getItem("userId");
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    axiosSecure.put(`${URL}/api/users/${userId}`, data).then((res) => {
      if (res.status === 200) {
        toast.success("User updated successfully");
      } else {
        toast.error(res.data.data.message);
      }
    });
  };
  return (
    <FormCard
      title="Personal Information"
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
                  Name
                </label>
                <input
                  disabled={edit ? false : true}
                  defaultValue={userInfo?.name}
                  {...register("name")}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm">
                  Email Address
                </label>
                <input
                  disabled={edit ? false : true}
                  defaultValue={userInfo?.email}
                  {...register("email")}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm">
                  Phone
                </label>
                <input
                  disabled={edit ? false : true}
                  defaultValue={userInfo?.phone_number}
                  {...register("phone_number")}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="" className="text-sm">
                  Status
                </label>
                <select
                  label="Select Status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  disabled={edit ? false : true}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                      : "p-2 rounded-md bg-white border border-gary-200"
                  }`}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {edit ? (
          <div className="my-5 flex gap-5 justify-end">
            <IButton type="submit">Update</IButton>
            <Button className="bg-red-400" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </div>
        ) : null}
      </form>
    </FormCard>
  );
};

export default PersonalInfo;
