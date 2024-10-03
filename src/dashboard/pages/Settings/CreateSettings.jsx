import { toast } from "react-toastify";
import Form from "../../components/form/Form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSetting from "../../hooks/useSettings";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import { useState } from "react";

const CreateSettings = () => {
  const settings = useSetting();
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState([]);
  console.log("settings:", settings);
  const onSubmit = async (data) => {
    // try {
    //   await axiosSecure.post("/api/settings", data).then((response) => {
    //     if (response.status === 200) {
    //       toast.success(response.data.message);
    //     }
    //   });
    // } catch (err) {
    //   toast.error(err);
    //   console.log(err);
    // }
    const post = {
      ...data,
      value: [value],
    };
    console.log("data", post);
  };
  return (
    <FormCard title="Create Settings">
      <Form onSubmit={onSubmit} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid gap-6">
          <TextInput type="text" name="name" label="Name" />
          <TextInput type="text" name="slug" label="Slug" />
          <TextInput type="text" name="key" label="Key" />
          {/* <TextInput type="text" name="value" label="Value" /> */}
          <input
            className="border border-gray-300"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <IButton className="flex ml-auto">Submit</IButton>
      </Form>
    </FormCard>
  );
};

export default CreateSettings;
