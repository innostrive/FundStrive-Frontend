import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Rating,
} from "@material-tailwind/react";
import reviewimg from "../../assets/Logo/user.jpg";
import { ThreeDotMenu } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import IButton from "../../../dashboard/ui/IButton";
import useReview from "../../hooks/useReview";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ReviewCard = ({ review, handleDelete }) => {
  const [edit, setEdit] = useState(false);
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState();
  const [updateComment, setUpdateComment] = useState("");
  const [, refetch] = useReview();
  const { reset, handleSubmit } = useForm();

  // useEffect(() => {
  //   axios.get(`${URL}/reviews/${review?._id}`).then((res) => {
  //     const reviewData = res.data.data.reviews;
  //     console.log("review:", reviewData);
  //     setRating(reviewData?.rating);
  //     setUpdateComment(reviewData?.review);
  //   });
  // }, [review?._id]);

  useEffect(() => {
    reset();
  }, [reset]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      rating,
      // campaign_id: campaignId,
      review: updateComment,
    };
    // setIsLoading(true);
    // await axios.put(`${URL}/reviews/${review?._id}`, payload).then((res) => {
    //   if (res.status === 200) {
    //     toast.success(res.data.message);
    //     setIsLoading(false);
    //     console.log("review:", res.data);
    //   }
    //   refetch();
    // });
    console.log("data:", payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 items-center border border-gray-300 rounded-md p-5">
        <div className="col-span-2">
          <img
            src={reviewimg}
            alt=""
            className="rounded-full object-cover h-20 w-20"
          />
        </div>
        <div className="col-span-10 space-y-5">
          <div className="flex justify-between">
            <h1>{review?.name}</h1>
            <div>
              <Rating
                className="text-primary"
                value={review?.rating}
                readonly={edit ? false : true}
                onChange={(newRating) => handleRatingChange(newRating)}
              />
              <Menu>
                <MenuHandler>
                  <button>
                    <ThreeDotMenu />
                  </button>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={() => handleDelete(review?._id)}>
                    Delete
                  </MenuItem>
                  <MenuItem onClick={() => setEdit(true)}>Edit</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          {edit ? (
            <div>
              <textarea
                className="border border-gray-300 px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded min-h-32 h-auto"
                defaultValue={review?.review}
                onChange={(e) => setUpdateComment(e.target.value)}
              />
              <div className="space-x-4 my-5">
                <IButton type="submit">Update</IButton>
                <IButton className="bg-red-500" onClick={() => setEdit(false)}>
                  Cancel
                </IButton>
              </div>
            </div>
          ) : (
            <p>{review?.review}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ReviewCard;
