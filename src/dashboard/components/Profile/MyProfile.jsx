import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";

const MyProfile = () => {
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
      title="Profle"
      icon={
        <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
      }
    >
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

export default MyProfile;
