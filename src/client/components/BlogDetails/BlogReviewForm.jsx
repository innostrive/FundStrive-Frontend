import axios from "axios";
import IButton from "../../../dashboard/ui/IButton";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { getTranslationObject } from "../../../../i18next";
const BlogReviewForm = ({ blog, refetch }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      post_id: blog?._id,
    };
    setIsLoading(true);
    await axios.post(`${URL}/reviews`, payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        setIsLoading(false);
        reset();
      }
      refetch();
    });
  };
  const translation = getTranslationObject("public");
  const {
    name,
    email,
    comment,
    wait,
    submit,
    nameError,
    emailError,
    commentError,
    emailFormat,
  } = translation?.blog;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1 grid gap-6">
        <span className="-mb-3 text-sm text-secondary">{name}</span>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: nameError,
          })}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Email Field */}
        <span className="-mb-3 text-sm text-secondary">{email}</span>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: emailError,
            pattern: { value: /^\S+@\S+$/i, message: emailFormat },
          })}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Review Field */}
        <span className="-mb-3 text-sm text-secondary">{comment}</span>
        <textarea
          name="review"
          {...register("review", {
            required: commentError,
          })}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded h-auto min-h-40 ${
            errors.review ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.review && (
          <p className="text-red-500">{errors.review.message}</p>
        )}
      </div>

      <IButton className="mt-5 rounded-none py-5">
        {isLoading ? wait : submit}
      </IButton>
    </form>
  );
};

export default BlogReviewForm;
