import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSetting from "../../hooks/useSettings";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

const CreateAboutVision = () => {
  const settings = useSetting();
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  console.log("settings:", settings);
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      name: "Vision",
      slug: "VISION",
    };
    try {
      await axiosSecure.post("/api/settings", payload).then((response) => {
        if (response.status === 200) {
          console.log("settings:", response.data.message);
          toast.success(response.data.message);
          reset();
          navigate("/dashboard/about-vision");
        }
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("data", data);
  };
  return (
    <FormCard title="Create Settings">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid gap-6">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="title"
              name="title"
              {...register("key", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
            />
            {errors.key && (
              <span className="text-red-500 text-sm">{errors.key.message}</span>
            )}
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Success Value</span>
            <textarea
              type="text"
              className="text-base h-auto min-h-40 border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="Description"
              name="Description"
              {...register("value", {
                required: "Description is required",
              })}
            />
            {errors.value && (
              <span className="text-red-500 text-sm">
                {errors.value.message}
              </span>
            )}
          </div>
        </div>
        <IButton className="flex ml-auto mt-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateAboutVision;
