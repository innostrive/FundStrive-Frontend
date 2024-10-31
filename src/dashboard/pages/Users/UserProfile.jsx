import React, { useState } from "react";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import FormCard from "../../ui/FormCard";
import { Edit } from "../../assets/icons/icons";

const UserProfile = ({ userInfo }) => {
  const [edit, setEdit] = useState(false);
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <FormCard>
      <div className="flex gap-4 items-center mb-10">
        <div>
          <img
            src={imageUrl + userInfo?.image}
            crossOrigin="anonymous"
            alt=""
            className="rounded-full h-20 w-20 object-cover"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-xl font-normal text-black">{userInfo?.name}</h1>
          <span className="text-xs font-normal text-gray-700">
            {userInfo?.country}, {userInfo?.state}
          </span>
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

export default UserProfile;
