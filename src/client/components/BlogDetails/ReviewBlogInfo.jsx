import reviewing from "../../assets/Logo/user.jpg";
const ReviewBlogInfo = ({ review }) => {
  return (
    <div className="grid grid-cols-12 items-center border border-gray-300 rounded-md p-5">
      <div className="col-span-2">
        <img
          src={reviewing}
          alt=""
          className="rounded-full object-cover h-20 w-20"
        />
      </div>
      <div className="col-span-10 space-y-5">
        <div className="flex justify-between">
          <h1>{review?.name}</h1>
        </div>
        <p>{review?.review}</p>
      </div>
    </div>
  );
};

export default ReviewBlogInfo;
