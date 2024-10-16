import axios from "axios";
import IButton from "../../../dashboard/ui/IButton";
import { Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import useReview from "../../hooks/useReview";
import { useForm } from "react-hook-form";
const ReviewForm = ({ campaignId }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState();
  const [, refetch] = useReview();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
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
        console.log("review:", res.data);
      }
      refetch();
    });
    console.log("data:", payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center gap-5 mb-2">
        <Typography className="">Rate This Campaign?</Typography>
        <Rating
          className="text-primary"
          value={rating}
          onChange={handleRatingChange}
        />
      </div>
      <div className="mb-1 grid gap-6">
        <span className="-mb-3 text-sm text-secondary">Name</span>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
          })}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        {/* Email Field */}
        <span className="-mb-3 text-sm text-secondary">Email</span>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
          className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Review Field */}
        <span className="-mb-3 text-sm text-secondary">Review</span>
        <textarea
          name="review"
          {...register("review", {
            required: "Review is required",
            minLength: {
              value: 10,
              message: "Review must be at least 10 characters long",
            },
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
        {isLoading ? "Wait..." : "Submit"}
      </IButton>
    </form>
  );
};

export default ReviewForm;
