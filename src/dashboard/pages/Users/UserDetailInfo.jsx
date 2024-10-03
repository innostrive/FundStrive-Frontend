import { Button } from "@material-tailwind/react";
import FormCard from "../../ui/FormCard";
import { useState } from "react";
import IButton from "../../ui/IButton";
import { useForm } from "react-hook-form";
import { Edit } from "../../assets/icons/icons";
const UserDetailInfo = ({ userInfo }) => {
  const [edit, setEdit] = useState(false);
  const { register } = useForm();
  return (
    <section>
      <FormCard
        title="User Information"
        icon={
          <Edit
            onClick={() => setEdit(true)}
            className="size-6 text-secondary"
          />
        }
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 my-5">
          <div className="grid space-y-2">
            <label className="text-sm">Name</label>
            <input
              type="text"
              defaultValue={userInfo?.name}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Email</span>
            <input
              type="email"
              defaultValue={userInfo?.email}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("email")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Phone Number</span>
            <input
              type="text"
              defaultValue={userInfo?.phone_number}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("phone_number")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Country</span>
            <input
              type="text"
              defaultValue={userInfo?.country}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("country")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">State</span>
            <input
              type="text"
              defaultValue={userInfo?.state}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("state")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">City</span>
            <input
              type="text"
              defaultValue={userInfo?.city}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("city")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Post Code</span>
            <input
              type="text"
              defaultValue={userInfo?.post_code}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("post_code")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Address</span>
            <input
              type="text"
              defaultValue={userInfo?.address}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("address")}
            />
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
    </section>
  );
};

export default UserDetailInfo;
