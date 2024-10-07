import { FormProvider, useForm } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextInput from "../../../ui/TextInput";
import IButton from "../../../ui/IButton";
import { toast } from "react-toastify";

const CreateBanner = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const methods = useForm();
  const { handleSubmit } = methods;

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const postData = {
      ...data,
      image: image,
    };
    try {
      await axiosSecure
        .post("/api/banners", postData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            navigate("/dashboard/banner-list");
          }
        });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("data", data);
  };

  return (
    <FormCard title="Upload Banner">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="mb-1 grid gap-6">
            <TextInput type="text" name="name" label="Name" />
            <TextInput type="text" name="slug" label="Slug" />
          </div>
          <div className="col-span-2 mt-5">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
            >
              Upload Image
            </label>
            <input
              type="file"
              className="hidden"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <div className="mt-5">
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
          <IButton className="flex ml-auto">Submit</IButton>
        </form>
      </FormProvider>
    </FormCard>
  );
};

export default CreateBanner;
