import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const UserDetailInfo = ({ userInfo }) => {
  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
        <div className="flex ml-auto p-2 bg-red-200 rounded-md w-10">
          <Link to={`/dashboard/edit-user/${userInfo?._id}`}>
            {" "}
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div>
            <img
              src={userInfo?.image}
              alt=""
              className="rounded-full h-20 w-20"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-medium text-black">{userInfo?.name}</h1>
            <span className="text-xs font-normal text-gray-700">
              {userInfo?.country}, {userInfo?.state}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-2">
            <span className="text-sm">Name</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.name}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Email</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.email}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Phone Number</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.phone_number}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Country</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.country}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">State</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.state}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">City</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.city}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Post Code</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.post_code}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Address</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {userInfo?.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetailInfo;
