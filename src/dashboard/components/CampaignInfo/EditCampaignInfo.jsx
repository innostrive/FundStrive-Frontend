import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EditCampaignInfo = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [campaignInfo, setCampaignInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const axiosSecure = useAxiosSecure();

  // Fetch campaign info from API
  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      const userData = res.data.data;
      setCampaignInfo(userData);
    });
  }, [id, axiosSecure]);
  useEffect(() => {
    reset();
  }, [campaignInfo]);

  const onSubmit = (data) => {
    console.log("Data being submitted:", data); // Check if data is populated
    if (!data) {
      console.error("Data is null or undefined!");
      return;
    }

    axiosSecure
      .put(`/api/campaigns/${id}`, data)
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
      <div className="h-auto w-full max-w-7xl p-5 rounded-md bg-white border space-y-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 grid grid-cols-2 gap-10">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Name</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={campaignInfo?.name}
                {...register("name")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Title</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={campaignInfo?.title} // Show default value
                {...register("title")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Target Amount</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={campaignInfo?.target_amount} // Show default value
                {...register("target_amount")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Deadline</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="date"
                defaultValue={campaignInfo?.deadline} // Show default value
                {...register("deadline")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Status</span>
              <Select
                label="Select Status"
                value={selectedStatus}
                onChange={(value) => setSelectedStatus(value)}
              >
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
              {/* <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={campaignInfo?.status} // Show default value
                {...register("status")} // Register the input
              /> */}
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Description</span>
              <Textarea
                size="lg"
                placeholder="description"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="text"
                defaultValue={campaignInfo?.description} // Show default value
                {...register("description")} // Register the input
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">Image</span>
              <input
                className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="file"
                defaultValue={campaignInfo?.image} // Show default value
                {...register("image")} // Register the input
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

export default EditCampaignInfo;
