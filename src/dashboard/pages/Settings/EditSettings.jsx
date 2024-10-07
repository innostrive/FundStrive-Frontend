import { useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import IButton from "../../ui/IButton";

const EditSettings = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.get(`/api/settings/${id}`).then((res) => {
      setSettings(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, []);

  const onSubmit = (data) => {
    const editData = {
      ...data,
      status: selectedStatus,
    };
    axiosSecure.put(`/api/settings/${id}`, editData).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/dashboard/menu-settings");
      }
      console.log(res.data.data);
    });
  };

  return (
    <FormCard title="Settings Details">
      <Form onSubmit={onSubmit}>
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
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Slug</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              defaultValue={settings?.slug}
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
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Menu URL</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              defaultValue={settings?.value}
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
          submit
        </IButton>
      </Form>
    </FormCard>
  );
};

export default EditSettings;
