import { FormProvider, useForm } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import TextInput from "../../../ui/TextInput";
import IButton from "../../../ui/IButton";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "../../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../../i18next";

const EditBanner = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const methods = useForm();
  const [banner, setBanner] = useState({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const axiosSecure = useAxiosSecure();
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    carusel,
    updateCarusel,
    status,
    image: imageT,
    uploadImage,
    submit,
    caruselUpdateSuccess,
    error,
  } = dashboardTranslations.carusel;

  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setBanner(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, [id, axiosSecure]);

  useEffect(() => {
    reset();
  }, [banner]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview("");
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const bannerData = {
      ...data,
      image,
      status: selectedStatus,
    };
    await axiosSecure
      .put(`/api/banners/${id}`, bannerData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(updateCarusel);
          navigate("/admin-dashboard/banners");
        }
      })
      .catch((err) => {
        toast.error(error);
      });
  };

  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/banners" className="opacity-60">
          {carusel}
        </NavLink>
        <span className="cursor-context-menu">{updateCarusel}</span>
      </Breadcrumbs>
      <FormCard title="Update Carusel">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
            <div className="space-y-5">
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
            <div className="grid grid-cols-1 col-span-2 space-y-2 mt-5">
              <span className="text-sm">{imageT}</span>
              <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                <img
                  src={imageUrl + banner?.image}
                  alt="user"
                  className="h-full w-full object-cover object-center rounded-md"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <div className="col-span-2 mt-5">
              <label
                htmlFor="image"
                className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
              >
                {uploadImage}
              </label>
              <input
                type="file"
                className="hidden"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImage}
              />
              <div className="mt-5 relative">
                {imagePreview && (
                  <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2 relative">
                    <img
                      src={imagePreview}
                      alt=""
                      className="h-full w-full object-cover object-center rounded-md"
                    />
                    <button
                      type="button"
                      onClick={clearImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 size-6 flex items-center justify-center"
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>
            <IButton className="flex ml-auto">{submit}</IButton>
          </form>
        </FormProvider>
      </FormCard>
    </DashboardLayout>
  );
};

export default EditBanner;
