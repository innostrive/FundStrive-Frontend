import { useForm } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import IButton from "../../../ui/IButton";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useTopNavData from "../../../hooks/useTopNavData";
import axios from "axios";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../../i18next";

const EditEmail = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [settings, setSettings] = useState({});
  const { register, reset, handleSubmit } = useForm();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { topNavInfo, updateEmail, email, update, emailUpdate, error } =
    dashboardTranslations.menu;

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
        toast.success(emailUpdate);
        navigate("/admin-dashboard/navmenus");
      } else {
        toast.error(error);
      }
    });
  };
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/navmenus" className="opacity-60">
          {topNavInfo}
        </NavLink>
        <span className="cursor-context-menu">{updateEmail}</span>
      </Breadcrumbs>
      <FormCard title="Update Email">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{email}</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              {...register("key")}
              defaultValue={settings?.key}
            />
          </div>
          <IButton className="flex ml-auto mt-5">{update}</IButton>
        </form>
      </FormCard>
    </DashboardLayout>
  );
};

export default EditEmail;
