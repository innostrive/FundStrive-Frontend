import { Rating } from "@material-tailwind/react";
import reviewimg from "../../assets/Logo/user.jpg";
import StarRating from "../ui/StarRating";
import ShowRating from "../ui/ShowRating";

const ReviewCard = ({ review }) => {
  return (
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
            {/* <Rating className="text-primary" value={review?.rating} readonly /> */}
            <ShowRating rating={review?.rating} />
          </div>
        </div>
        <p>{review?.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
