import { NavLink, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import IButton from "../../ui/IButton";
import axios from "axios";
import DashboardLayout from "../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";

const SettingsInfo = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setSettings(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, []);

  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/navmenus" className="opacity-60">
          Navmenus
        </NavLink>
        <span className="cursor-context-menu">Navmenu Details</span>
      </Breadcrumbs>
      <FormCard title="Settings Details">
        <div className="grid grid-cols-2 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              defaultValue={settings?.name}
              disabled
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Menu</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              defaultValue={settings?.key}
              disabled
            />
          </div>
          <div className="grid col-span-2 space-y-2">
            <span className="text-sm">Status</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              defaultValue={settings?.status}
              disabled
            />
          </div>
        </div>
      </FormCard>
    </DashboardLayout>
  );
};

export default SettingsInfo;
