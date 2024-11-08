import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";
import FormCard from "../../../ui/FormCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import IButton from "../../../ui/IButton";
import { getTranslationObject } from "../../../../../i18next";

const EditCaruselTitle = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    updateCaruselTitle,
    carusel,
    shortTitle,
    description,
    status,
    update,
  } = dashboardTranslations.carusel;

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
      name: "Carusel Title",
      slug: "CARUSEL_TITLE",
      status: selectedStatus,
    };
    axiosSecure.put(`/api/settings/${id}`, editData).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/admin-dashboard/banners");
      }
    });
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/banners" className="opacity-60">
          {carusel}
        </NavLink>
        <span className="cursor-context-menu">{updateCaruselTitle}</span>
      </Breadcrumbs>
      <FormCard title={updateCaruselTitle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{shortTitle}</span>
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
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{description}</span>
              <input
                type="text"
                size="lg"
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
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

export default EditCaruselTitle;
