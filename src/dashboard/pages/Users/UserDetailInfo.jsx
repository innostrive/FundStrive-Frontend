import TextInput from "../../ui/TextInput";

const UserDetailInfo = ({ userInfo }) => {
  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
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
