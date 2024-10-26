import { useForm } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import IButton from "../../../ui/IButton";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import axios from "axios";

const EditPhone = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [settings, setSettings] = useState({});
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setSettings(res.data.data);
    });
  }, [id]);

  useEffect(() => {
    reset();
  }, [id]);

  const onSubmit = (data) => {
    axiosSecure.put(`/api/settings/${id}`, data).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/dashboard/top-navbar");
      } else {
        toast.warning("Something wrong");
      }
      // console.log(res.data.data);
    });

    // console.log("topnav:", data);
  };
  return (
    <FormCard title="Update Phone">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Name</span>
          <input
            type="text"
            size="lg"
            className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
            id="name"
            {...register("value")}
            defaultValue={settings?.value}
          />
        </div>
        <IButton className="flex ml-auto mt-5">Update</IButton>
      </form>
    </FormCard>
  );
};

export default EditPhone;
