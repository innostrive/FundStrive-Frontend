import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import IButton from "../../ui/IButton";

const SettingsInfo = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [settings, setSettings] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");

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
        toast.success(res.data.data.message);
      }
      console.log(res.data.data);
    });
  };

  return (
    <FormCard title="Settings Details">
      <Form onSubmit={onSubmit}>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-auto text-base rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <IButton type="submit">submit</IButton>
      </Form>
    </FormCard>
  );
};

export default SettingsInfo;
