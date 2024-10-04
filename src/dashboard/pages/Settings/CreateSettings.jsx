import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSetting from "../../hooks/useSettings";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateSettings = () => {
  const settings = useSetting();
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  console.log("settings:", settings);
  const onSubmit = async (data) => {
    try {
      await axiosSecure.post("/api/settings", data).then((response) => {
        if (response.status === 200) {
          console.log("settings:", response.data.message);
          toast.success(response.data.message);
          navigate("/dashboard/system-settings");
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
      <Form onSubmit={onSubmit} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid gap-6">
          <TextInput type="text" name="name" label="Name" />
          <TextInput type="text" name="slug" label="Slug" />
          <TextInput type="text" name="key" label="Menu Name" />
          <TextInput type="text" name="value" label="Menu URL" />
        </div>
        <IButton className="flex ml-auto">Submit</IButton>
      </Form>
    </FormCard>
  );
};

export default CreateSettings;
