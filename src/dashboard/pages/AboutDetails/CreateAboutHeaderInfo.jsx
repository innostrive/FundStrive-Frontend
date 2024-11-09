import { Typography } from "@material-tailwind/react";
import FormCard from "../../ui/FormCard";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  ClassicEditor,
  Context,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  ContextWatchdog,
} from "ckeditor5";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

import "ckeditor5/ckeditor5.css";
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
        <CKEditorContext
          context={Context}
          contextWatchdog={ContextWatchdog}
          onChangeInitializedEditors={(editors) => {
            console.info(
              editors.editor1?.instance,
              editors.editor1?.yourAdditionalData
            );
          }}
        >
          <CKEditor
            editor={ClassicEditor}
            config={{
              plugins: [Essentials, Bold, Italic, Paragraph],
              toolbar: ["undo", "redo", "|", "bold", "italic"],
            }}
            data="<p>Hello from the first editor working with the context!</p>"
            contextItemMetadata={{
              name: "editor1",
              yourAdditionalData: 2,
            }}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor 1 is ready to use!", editor);
            }}
          />

          <CKEditor
            editor={ClassicEditor}
            config={{
              plugins: [Essentials, Bold, Italic, Paragraph],
              toolbar: ["undo", "redo", "|", "bold", "italic"],
            }}
            data="<p>Hello from the second editor working with the context!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor 2 is ready to use!", editor);
            }}
          />
        </CKEditorContext>
        <IButton className="flex ml-auto my-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateAboutHeaderInfo;
