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

const CreateSettings = () => {
  const settings = useSetting();
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  console.log("settings:", settings);
  const { reset, handleSubmit, register } = useForm();
  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      await axiosSecure.post("/api/settings", data).then((response) => {
        if (response.status === 200) {
          console.log("settings:", response.data.message);
          toast.success(response.data.message);
          navigate("/dashboard/menu-settings");
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
              id="name"
              {...register("name")}
              defaultValue="Menu"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Slug</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              name="name"
              {...register("slug")}
              defaultValue="NAVMENU"
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Menu</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              name="name"
              {...register("key")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Menu URL</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              name="name"
              {...register("value")}
            />
          </div>
        </div>
        <IButton className="flex ml-auto mt-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateSettings;
