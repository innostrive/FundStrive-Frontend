import { NavLink, useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import IButton from "../../ui/IButton";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const EditNavbarLogo = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    websiteLogo,
    updateNavbarLogo,
    status,
    uploadImage,
    submit,
    image: navImage,
    navbarLogoUpdateSuccess,
    error,
  } = dashboardTranslations.websiteLogo;
  const [navbarLogo, setNavbarLogo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setNavbarLogo(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, [id]);

  useEffect(() => {
    reset();
  }, [navbarLogo]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
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
          toast.success(navbarLogoUpdateSuccess);
          navigate("/admin-dashboard/website-logo");
        }
      })
      .catch((err) => {
        toast.error(error);
      });
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/website-logo" className="opacity-60">
          {websiteLogo}
        </NavLink>
        <span className="cursor-context-menu">{updateNavbarLogo}</span>
      </Breadcrumbs>
      <FormCard title="Update Navbar Logo">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="space-y-5">
            <div className="col-span-2 space-y-2">
              <span className="text-sm">Status</span>
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
            <span className="text-sm">{navImage}</span>
            <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
              <img
                src={
                  navbarLogo?.image
                    ? imageUrl + navbarLogo.image
                    : "default-placeholder-image.jpg"
                }
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
              onChange={(e) => handleImage(e)}
            />
            <div className="mt-5">
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2 relative">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded-full size-6 flex items-center justify-center"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
          <IButton className="flex ml-auto">{submit}</IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default EditNavbarLogo;
