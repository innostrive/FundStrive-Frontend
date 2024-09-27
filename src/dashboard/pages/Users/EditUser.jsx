import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Layout from "../../layout/Layout";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm(); // react-hook-form
  const [userInfo, setUserInfo] = useState();
  const axiosSecure = useAxiosSecure(); // custom hook for secure axios instance

  // Fetch user info from API
  useEffect(() => {
    axiosSecure.get(`/api/users/${id}`).then((res) => {
      const userData = res.data.data;
      setUserInfo(userData);
    });
  }, [id, axiosSecure]);
  useEffect(() => {
    reset();
  }, [userInfo]);
  // Handle form submission
  // const onSubmit = (data) => {
  //   axiosSecure.put(`/api/users/${id}`, data).then((response) => {
  //     // if (response.data.data !== null) {
  //     //   toast.success(response.data.message);
  //     // } else {
  //     //   toast.error(response.data.message);
  //     // }
  //     console.log(response);
  //   });
  // };

  const onSubmit = (data) => {
    console.log("Data being submitted:", data); // Check if data is populated
    if (!data) {
      console.error("Data is null or undefined!");
      return;
    }

    axiosSecure
      .put(`/api/users/${id}`, data)
      .then((response) => {
        console.log("Server response:", response);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Name</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.name}
                {...register("name")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Email</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="email"
                defaultValue={userInfo?.email} // Show default value
                {...register("email")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Phone Number</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.phone_number} // Show default value
                {...register("phone_number")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Country</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.country} // Show default value
                {...register("country")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">State</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.state} // Show default value
                {...register("state")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">City</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.city} // Show default value
                {...register("city")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Post Code</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.post_code} // Show default value
                {...register("post_code")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Address</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={userInfo?.address} // Show default value
                {...register("address")} // Register the input
              />
            </div>
          </div>
          <Button type="submit" className="my-5">
            Update
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
