import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import useSettings from "../../../hooks/useSettings";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import IButton from "../../../ui/IButton";

const CreateNavInfo = () => {
  const settings = useSettings();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  console.log("settings:", settings);
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      await axiosSecure.post("/api/settings", data).then((response) => {
        if (response.status === 200) {
          console.log("settings:", response.data.message);
          toast.success(response.data.message);
          reset();
          //   navigate("/dashboard/menu-settings");
        }
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("data", data);
  };
  return (
    <FormCard title="Create Top NavInfo">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid gap-6">
          {/* Name Field */}
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              {...register("name", { required: "Name is required" })}
              defaultValue="INFO"
            />
          </div>
          {/* Slug Field */}
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Slug</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="slug"
              {...register("slug", { required: "Slug is required" })}
              defaultValue="NAVINFO"
            />
          </div>
          {/* Email Field */}
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Email</span>
            <input
              type="email"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="email"
              {...register("key", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Phone</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="phone"
              {...register("value", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number should be at least 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <IButton className="flex ml-auto mt-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateNavInfo;
