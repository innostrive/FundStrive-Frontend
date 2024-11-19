import { NavLink, useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import IButton from "../../ui/IButton";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const EditAboutIntro = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    aboutIntro: aboutIntroT,
    updateAboutIntro,
    introName,
    successValue,
    status,
    update,
    updateSuccess,
    error,
  } = dashboardTranslations.aboutInfo;

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
        toast.success(updateSuccess);
        navigate("/admin-dashboard/about-vision");
      } else {
        toast.error(error);
      }
    });
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/about-info" className="opacity-60">
          {aboutIntroT}
        </NavLink>
        <span className="cursor-context-menu">{updateAboutIntro}</span>
      </Breadcrumbs>
      <FormCard title={updateAboutIntro}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{introName}</span>
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
              <span className="text-sm">{successValue}</span>
              <textarea
                type="text"
                className="text-base h-auto min-h-40 border border-gray-300 px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded"
                id="value"
                name="value"
                defaultValue={settings?.value}
                {...register("value")}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <span className="text-sm">{status}</span>
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
            {update}
          </IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default EditAboutIntro;
