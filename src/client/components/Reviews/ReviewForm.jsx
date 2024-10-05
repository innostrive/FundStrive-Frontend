import axios from "axios";
import Form from "../../../dashboard/components/form/Form";
import IButton from "../../../dashboard/ui/IButton";
import TextInput from "../../../dashboard/ui/TextInput";
import { Rating, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ReviewForm = ({ campaignId }) => {
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const onSubmit = async (data) => {
    const payload = {
      ...data,
      rating,
      campaignId,
    };

    await axiosSecure
      .post(`http://localhost:4000/reviews`, payload)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          console.log("review:", res.data);
        }
      });
    console.log("data:", payload);
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
      <IButton className="mt-5 rounded-none py-5">Review Submit</IButton>
    </Form>
  );
};

export default ReviewForm;
