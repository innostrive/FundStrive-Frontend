import { useForm } from "react-hook-form";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const CreateFaq = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    createFaq,
    question,
    answer,
    submit,
    faq,
    questionError,
    answerError,
    createFaqSuccess,
    error,
  } = dashboardTranslations.faq;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      slug: "FAQ",
      name: "FAQ",
    };
    axiosSecure.post("/api/settings", payload).then((res) => {
      if (res.status === 200) {
        toast.success(createFaqSuccess);
        reset();
        navigate("/admin-dashboard/faq");
      } else {
        toast.warning(error);
      }
    });
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/faq" className="opacity-60">
          {faq}
        </NavLink>
        <span className="cursor-context-menu">{createFaq}</span>
      </Breadcrumbs>
      <FormCard title="Create FAQ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{question}</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="key"
              name="key"
              {...register("key", {
                required: questionError,
              })}
            />
            {errors.key && (
              <span className="text-red-500 text-xs">{errors.key.message}</span>
            )}
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{answer}</span>
            <textarea
              type="text"
              className="text-base border border-gray-300 h-auto min-h-40 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="value"
              name="value"
              {...register("value", {
                required: answerError,
              })}
            />
            {errors.value && (
              <span className="text-red-500 text-xs">
                {errors.value.message}
              </span>
            )}
          </div>

          <IButton className="flex ml-auto mt-5">{submit}</IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default CreateFaq;
