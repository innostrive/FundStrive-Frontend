import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";

const Address = () => {
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
    <FormCard
      title="Address"
      icon={
        <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
      }
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="grid grid-cols-2 justify-between gap-5">
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Address
              </label>
              <input
                disabled={edit ? false : true}
                //   value="Jon Doe"
                defaultValue={userInfo?.address}
                className={`${
                  edit
                    ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                    : "p-2 rounded-md bg-white border border-gary-200"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Country
              </label>
              <input
                disabled={edit ? false : true}
                //  value="USA"
                defaultValue={userInfo?.country}
                className={`${
                  edit
                    ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                    : "p-2 rounded-md bg-white border border-gary-200"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                State
              </label>
              <input
                disabled={edit ? false : true}
                //   value="New Yourk"
                defaultValue={userInfo?.state}
                className={`${
                  edit
                    ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                    : "p-2 rounded-md bg-white border border-gary-200"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                City
              </label>
              <input
                disabled={edit ? false : true}
                //   value="Town"
                defaultValue={userInfo?.city}
                className={`${
                  edit
                    ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                    : "p-2 rounded-md bg-white border border-gary-200"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Post Code
              </label>
              <input
                disabled={edit ? false : true}
                //   value="22222"
                defaultValue={userInfo?.post_code}
                className={`${
                  edit
                    ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                    : "p-2 rounded-md bg-white border border-gary-200"
                }`}
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
    </FormCard>
  );
};

export default Address;
