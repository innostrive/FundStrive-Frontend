import axios from "axios";
import IButton from "../../../dashboard/ui/IButton";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import useReview from "../../hooks/useReview";
import { useForm } from "react-hook-form";
import StarRating from "../ui/StarRating";
import { getTranslationObject } from "../../../../i18next";
const ReviewForm = ({ campaignId }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [, refetch] = useReview();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      rating,
      campaign_id: campaignId,
    };
    setIsLoading(true);
    await axios.post(`${URL}/reviews`, payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        setIsLoading(false);
        reset();
        setRating(0);
        setHoverRating(0);
        refetch();
      }
    });
  };
  const translation = getTranslationObject("public");
  const {
    rating: ratingT,
    name,
    wait,
    email,
    emailError,
    review,
    reviewError,
    submit,
    emailFormat,
  } = translation?.campaign;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-5 mb-2">
        <Typography className="">{ratingT}</Typography>
        <StarRating
          rating={rating}
          hoverRating={hoverRating}
          setRating={setRating}
          setHoverRating={setHoverRating}
        />
      </div>
      <div className="mb-1 grid gap-6">
        <span className="-mb-3 text-sm text-secondary">Name</span>
        <input
          type="text"
          name={name}
          {...register("name")}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Email Field */}
        <span className="-mb-3 text-sm text-secondary">Email</span>
        <input
          type="email"
          name={email}
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
        <span className="-mb-3 text-sm text-secondary">{review}</span>
        <textarea
          name="review"
          {...register("review", {
            required: reviewError,
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

export default ReviewForm;
