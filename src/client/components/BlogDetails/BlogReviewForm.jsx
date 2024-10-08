import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Form from "../../../dashboard/components/form/Form";
import { Rating, Typography } from "@material-tailwind/react";
import TextInput from "../../../dashboard/ui/TextInput";
import IButton from "../../../dashboard/ui/IButton";

const BlogReviewForm = ({ blog, refetch }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const onSubmit = async (data) => {
    const payload = {
      ...data,
      rating,
      post_id: blog?._id,
    };
    setIsLoading(true);
    await axiosSecure.post(`${URL}/reviews`, payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        refetch();
        setIsLoading(false);
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
      <IButton className="mt-5 rounded-none py-5">
        {isLoading ? "Wait..." : "Review Submit"}
      </IButton>
    </Form>
  );
};

export default BlogReviewForm;
