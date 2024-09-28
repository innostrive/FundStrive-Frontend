import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";

const EditCategoryInfo = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm(); // react-hook-form
  const [categoryInfo, setCategoryInfo] = useState({});
  const axiosSecure = useAxiosSecure(); // custom hook for secure axios instance

  // Fetch user info from API
  useEffect(() => {
    axiosSecure.get(`/categories/${id}`).then((res) => {
      const userData = res.data.data;
      setCategoryInfo(userData);
    });
  }, [id, axiosSecure]);
  useEffect(() => {
    reset();
  }, [categoryInfo]);

  const onSubmit = (data) => {
    console.log("Data being submitted:", data); // Check if data is populated
    if (!data) {
      console.error("Data is null or undefined!");
      return;
    }

    axiosSecure
      .put(`/api/categories/${id}`, data)
      .then((response) => {
        console.log("Server response:", response);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };
  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
        <div className="my-5">
          <span className="text-lg font-medium leading-normal text-gray-700">
            Update Category
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Name</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={categoryInfo?.name}
                {...register("name")}
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Status</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={categoryInfo?.status}
                {...register("status")}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-2 mt-7">
            <span className="text-sm">Description</span>
            <textarea
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded min-h-20"
              type="text"
              defaultValue={categoryInfo?.description}
              {...register("description")}
            />
          </div>
          <div className="grid grid-cols-1 mt-7">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full bg-[#f3f4f7] border-gray-300 border p-2 rounded-md"
            >
              Upload Image
            </label>
            <input
              type="file"
              placeholder="Upload Image"
              className="hidden"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
          <Button type="submit" className="my-5 w-full">
            Update
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EditCategoryInfo;
