import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSetting from "../../../hooks/useSettings";
import FormCard from "../../../ui/FormCard";
import IButton from "../../../ui/IButton";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getTranslationObject } from "../../../../../i18next";
import { Breadcrumbs } from "@material-tailwind/react";

const CreateCaruselTitle = () => {
  const settings = useSetting();
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    createCaruselTitle,
    shortTitle,
    description,
    submit,
    shortTitleError,
    carusel,
    createCaruselTitleSuccess,
    error,
  } = dashboardTranslations.carusel;
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      name: "Carusel Title",
      slug: "CARUSEL_TITLE",
    };
    try {
      await axiosSecure.post("/api/settings", payload).then((response) => {
        if (response.status === 200) {
          toast.success(createCaruselTitleSuccess);
          reset();
          navigate("/admin-dashboard/banners");
        }
      });
    } catch (err) {
      toast.error(error);
    }
  };
  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/banners" className="opacity-60">
          {carusel}
        </NavLink>
        <span className="cursor-context-menu">{createCaruselTitle}</span>
      </Breadcrumbs>
      <FormCard title={createCaruselTitle}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="mb-1 grid gap-6">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{shortTitle}</span>
              <input
                type="text"
                size="lg"
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                id="name"
                name="name"
                {...register("key", {
                  required: shortTitleError,
                })}
              />
              {errors.key && (
                <span className="text-red-500 text-sm">
                  {errors.key.message}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{description}</span>
              <input
                type="text"
                size="lg"
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                id="menuUrl"
                name="menuUrl"
                {...register("value")}
              />
              {errors.value && (
                <span className="text-red-500 text-sm">
                  {errors.value.message}
                </span>
              )}
            </div>
          </div>
          <IButton className="flex ml-auto mt-5">{submit}</IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default CreateCaruselTitle;
