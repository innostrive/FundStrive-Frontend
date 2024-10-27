import { useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import IButton from "../../ui/IButton";
import axios from "axios";
import { useForm } from "react-hook-form";

const EditAboutIntro = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setSettings(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, []);

  useEffect(() => {
    reset();
  }, [settings]);

  const onSubmit = (data) => {
    const editData = {
      ...data,
      name: "Vision",
      slug: "VISION",
      status: selectedStatus,
    };
    axiosSecure.put(`/api/settings/${id}`, editData).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/dashboard/about-vision");
      }
      console.log(res.data.data);
    });
    console.log("edit:", editData);
  };

  return (
    <FormCard title="Update">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="key"
              name="key"
              defaultValue={settings?.key}
              {...register("key")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Success Value</span>
            <textarea
              type="text"
              className="text-base h-auto min-h-40 border border-gray-300 px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded"
              id="value"
              name="value"
              defaultValue={settings?.value}
              {...register("value")}
            />
          </div>
          <div className="col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-full text-base rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <IButton type="submit" className="my-5 flex ml-auto">
          update
        </IButton>
      </form>
    </FormCard>
  );
};

export default EditAboutIntro;
