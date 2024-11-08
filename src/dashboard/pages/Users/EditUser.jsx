import { Breadcrumbs, Button, Option, Select } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import Form from "../../components/form/Form";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const EditUser = () => {
  const { id } = useParams();
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    name,
    email,
    phoneNumber,
    address,
    uploadImage,
    imageU,
    postCode,
    country,
  } = dashboardTranslations?.form;
  const { updateUser, users, updateBtn } =
    dashboardTranslations?.dashboardTitle;
  const { register, handleSubmit, reset, control } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  useEffect(() => {
    axiosSecure.get(`/api/users/${id}`).then((res) => {
      const userData = res.data.data;
      setUserInfo(userData);
      setSelectedStatus(userData?.status);
    });
  }, [id, axiosSecure]);

  useEffect(() => {
    reset();
  }, [userInfo]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview("");
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const payload = {
      ...data,
      status: selectedStatus,
      image,
    };
    axiosSecure
      .put(`/api/users/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          navigate("/admin-dashboard/users");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <DashboardLayout>
      <Breadcrumbs className="mb-5 bg-gray-400 bg-opacity-30">
        <NavLink to="/admin-dashboard/users" className="opacity-60">
          {users}
        </NavLink>
        <span className="cursor-context-menu">{updateUser}</span>
      </Breadcrumbs>
      <FormCard title={updateUser}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{name}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.name}
                {...register("name")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{email}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="email"
                defaultValue={userInfo?.email} // Show default value
                {...register("email")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{phoneNumber}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.phone_number} // Show default value
                {...register("phone_number")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{country}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.country} // Show default value
                {...register("country")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{status}</span>
              <select
                label="Select Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-auto text-base rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{postCode}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.post_code} // Show default value
                {...register("post_code")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 col-span-2 space-y-2">
              <span className="text-sm">{address}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.address} // Show default value
                {...register("address")} // Register the input
              />
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-2 space-y-2 mt-5">
            <span className="text-sm">{imageU}</span>
            <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
              <img
                src={imageUrl + userInfo?.image}
                alt="user"
                className="h-full w-full object-cover object-center rounded-md"
                crossOrigin="anonymous"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-7">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-full w-full border border-gray-300 p-2 rounded-md"
            >
              {uploadImage}
            </label>
            <input
              type="file"
              placeholder="Upload Image"
              className="hidden"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <div className="mt-5">
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2 relative">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded-full size-6 flex items-center justify-center"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
          <IButton className="flex ml-auto my-5">{updateBtn}</IButton>
        </form>
      </FormCard>
    </DashboardLayout>
  );
};

export default EditUser;
