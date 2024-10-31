import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import DashboardLayout from "../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";

const CreatePartner = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      name: "Partner",
      slug: "PARTNER",
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
            navigate("/admin-dashboard/banners");
          }
        });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("data", data);
  };

  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/banners" className="opacity-60">
          Banners
        </NavLink>
        <span className="cursor-context-menu">Upload Partner Image</span>
      </Breadcrumbs>
      <FormCard title="Upload Partner Image">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
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
      </FormCard>
    </DashboardLayout>
  );
};

export default CreatePartner;
