import axios from "axios";
import Form from "../../../dashboard/components/form/Form";
import IButton from "../../../dashboard/ui/IButton";
import TextInput from "../../../dashboard/ui/TextInput";
import { Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import useReview from "../../hooks/useReview";
import { useForm } from "react-hook-form";
const ReviewForm = ({ campaignId }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [, refetch] = useReview();
  const { reset } = useForm();
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
    // console.log("data:", payload);
  };
  return (
    <Form onSubmit={onSubmit}>
      <div className="flex items-center gap-5">
        <Typography className="">Rate This Campaign?</Typography>
        <Rating
          className="text-primary"
          value={rating}
          onChange={(newRating) => handleRatingChange(newRating)}
        />
      </div>
      <TextInput label="Name" name="name" type="text" />
      <TextInput label="Email" name="email" type="text" />
      <TextInput label="Review" name="review" type="textarea" />
      <IButton className="mt-5 rounded-none py-5">
        {isLoading ? "Wait..." : "Review Submit"}
      </IButton>
    </Form>
  );
};

export default ReviewForm;
