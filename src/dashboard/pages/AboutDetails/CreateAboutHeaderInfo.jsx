import { Typography } from "@material-tailwind/react";
import FormCard from "../../ui/FormCard";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateAboutHeaderInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { control, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      ...data,
      name: "About",
      slug: "ABOUTDETAILS",
    };
    // try {
    //   await axiosSecure.post("/api/settings", payload).then((response) => {
    //     if (response.status === 200) {
    //       console.log("settings:", response.data.message);
    //       toast.success(response.data.message);
    //       reset();
    //       navigate("/dashboard/menu-settings");
    //     }
    //   });
    // } catch (err) {
    //   toast.error(err);
    //   console.log(err);
    // }
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Content
        </Typography>
        {/* <EditorToolbar toolbarId={"t2"} />
        <Controller
          name="value"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules("t2")}
                formats={formats}
                placeholder="Write description here..."
              />

              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </>
          )}
        /> */}
        {/* <FroalaEditor
          tag="textarea"
          model={content}
          onModelChange={setContent}
        /> */}
        <IButton className="flex ml-auto my-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateAboutHeaderInfo;
