import { Button, Option, Select } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import Form from "../../components/form/Form";

const EditUser = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset, control } = useForm();
  const [userInfo, setUserInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const axiosSecure = useAxiosSecure();

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

  // const onSubmit = (data) => {
  //   const formData = new FormData();

  //   formData.append("user", userInfo);

  //   if (image) {
  //     formData.append("image", image);
  //   } else {
  //     toast.error("image is missing");
  //   }

  //   const updateUser = {
  //     user: userInfo,
  //     image: image,
  //   };

  //   formData.append("data", JSON.stringify());

  //   axiosSecure
  //     .patch(`/api/users/upload-image`, updateUser, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.data !== null) {
  //         toast.success(response.data.message);
  //         console.log("image", response);
  //       } else {
  //         toast.error(response.data.message);
  //       }
  //       console.log(response);
  //     });
  // };

  const defaultValues = {
    name: "Jon Smith",
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const payload = {
      ...data,
      status: selectedStatus,
    };
    console.log("Data being submitted:", payload);
    formData.append("data", JSON.stringify(payload));
    axiosSecure
      .put(`/api/users/${id}`, payload)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          console.log("Server response:", response);
          navigate("/dashboard/users");
        }
      })
      .catch((error) => {
        toast.error(response.data.message);
        console.error("Error submitting data:", error);
      });
    console.log("data:", data);
  };

  return (
    <FormCard title="Update User">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={userInfo?.name}
              {...register("name")} // Register the input
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Email</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="email"
              defaultValue={userInfo?.email} // Show default value
              {...register("email")} // Register the input
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Phone Number</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={userInfo?.phone_number} // Show default value
              {...register("phone_number")} // Register the input
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Country</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={userInfo?.country} // Show default value
              {...register("country")} // Register the input
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Status</span>
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
            <span className="text-sm">Post Code</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={userInfo?.post_code} // Show default value
              {...register("post_code")} // Register the input
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Address</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={userInfo?.address} // Show default value
              {...register("address")} // Register the input
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-7">
          <label
            htmlFor="image"
            className="text-base text-black font-medium text-center cursor-pointer block h-full w-full border border-gray-300 p-2 rounded-md"
          >
            Upload Image
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
          <div>
            {imagePreview && (
              <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                <img
                  src={imagePreview}
                  alt=""
                  className="h-full w-full object-cover object-center rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        <IButton title="update" className="flex ml-auto my-5">
          update
        </IButton>
      </form>
    </FormCard>
  );
};

export default EditUser;
