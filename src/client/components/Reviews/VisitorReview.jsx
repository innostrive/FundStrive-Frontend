import { Rating } from "@material-tailwind/react";
import FormCard from "../../../dashboard/ui/FormCard";
import review from "../../assets/Logo/user.jpg";
const VisitorReview = () => {
  return (
    <div className="grid grid-cols-12 items-center bg-white rounded-md p-5">
      <div className="col-span-2">
        <img
          src={review}
          alt=""
          className="rounded-full object-cover h-20 w-20"
        />
      </div>
      <div className="col-span-10 space-y-5">
        <div className="flex justify-between">
          <h1>Jon Smith</h1>
          <Rating className="text-primary" value={4} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dicta
          laudantium saepe in? Nulla laborum consequatur unde, facilis earum
          repellendus?
        </p>
      </div>
    </div>
  );
};

export default VisitorReview;
