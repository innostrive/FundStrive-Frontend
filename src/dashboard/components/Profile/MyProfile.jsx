import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState(null);
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [imagePreview, setImagePreview] = useState(""); // State for image preview
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setUserInfo(res.data.data);
      setImagePreview(res.data.data.profileImage); // Set initial image preview
    });
  }, [userId]);

  useEffect(() => {
    reset(userInfo); // Reset form fields with fetched data
  }, [userInfo, reset]);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    // Prepare form data for image upload
    const formData = new FormData();
    formData.append("image", image);
    const payload = {
      ...data,
      image,
    };
    axiosSecure
      .put(`/api/users/${userId}`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          setEdit(false); // Close edit mode upon successful update
        }
      })
      .catch((error) => {
        toast.error("Error updating address.");
        console.error("Error submitting data:", error);
      });
  };
  return (
    <FormCard
      title="Profle"
      icon={
        <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <img
            src="https://via.placeholder.com/150"
            alt=""
            className="rounded-full size-20 object-cover"
          /> */}
            <label htmlFor="profileImage" className="cursor-pointer">
              <img
                src={imagePreview || imageUrl + userInfo?.image}
                alt="Profile"
                className="rounded-full size-20 object-cover"
                crossOrigin="anonymous"
              />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              {...register("image")}
              className="hidden"
              onChange={onImageChange}
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
      </form>
    </FormCard>
  );
};

export default MyProfile;
