import { NavLink, useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import IButton from "../../ui/IButton";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAboutSettings from "../../hooks/useAboutSettings";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const EditAboutSettings = () => {
  const { id } = useParams();
  const [aboutSuccess] = useAboutSettings();
  const axiosSecure = useAxiosSecure();
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    updateCampaignData,
    campaignData,
    status,
    update,
    successValue,
    introName,
    updateSuccess,
    error,
  } = dashboardTranslations.aboutInfo;
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const volunteer = aboutSuccess?.filter((item) => item?.key === "Volunteer");
  const donation = aboutSuccess?.filter((item) => item?.key === "Donation");
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
      name: "Activities",
      slug: "ACTIVITIES",
      status: selectedStatus,
    };
    axiosSecure.put(`/api/settings/${id}`, editData).then((res) => {
      if (res.status === 200) {
        toast.success(updateSuccess);
        navigate("/admin-dashboard/about-info");
      } else {
        toast.error(error);
      }
    });
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/about-info" className="opacity-60">
          {campaignData}
        </NavLink>
        <span className="cursor-context-menu">{updateCampaignData}</span>
      </Breadcrumbs>
      <FormCard title={updateCampaignData}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10">
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
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{successValue}</span>
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

export default EditAboutSettings;
