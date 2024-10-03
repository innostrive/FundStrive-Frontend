import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";

const EditCampaignInfo = ({
  campaignInfo,
  selectedCategory,
  selectedStatus,
  setSelectedCategory,
  setSelectedStatus,
}) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  // const [campaignInfo, setCampaignInfo] = useState({});
  // const [selectedStatus, setSelectedStatus] = useState("Active");
  // const [selectedCategory, setSelectedCategory] = useState();
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   axiosSecure.get(`/campaigns/${id}`).then((res) => {
  //     const userData = res.data.data;
  //     setCampaignInfo(userData);
  //     selectedCategory(userData);
  //   });
  // }, [id, axiosSecure]);

  // console.log("category:", userData.category);

  useEffect(() => {
    reset();
  }, [campaignInfo]);

  const onSubmit = (data) => {
    console.log("Data being submitted:", data);
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
    <FormCard title="Campaign Details">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.name}
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Title</span>
            <input
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.title}
              {...register("title")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Target Amount</span>
            <input
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.target_amount}
              {...register("target_amount")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Deadline</span>
            <input
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="date"
              value={
                campaignInfo?.deadline
                  ? new Date(campaignInfo.deadline).toISOString().split("T")[0]
                  : ""
              }
              {...register("deadline")}
              onChange={(e) => setValue("deadline", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <span className="text-sm">Status</span>
            <Select
              label="Select Status"
              value={selectedStatus}
              onChange={(value) => setSelectedStatus(value)}
            >
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </div>
          <div className="grid grid-cols-1">
            <span className="text-sm">Category</span>
            <Select
              label="Category"
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
            >
              <Option value={selectedCategory}>{selectedCategory}</Option>

              {/* {categories.map((category) => (
                <Option
                  key={category?._id}
                  value={category?._id}
                  className="text-black"
                >
                  {category.name}
                </Option>
              ))} */}
            </Select>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Image</span>
            <input
              className="bg-[#f3f4f7] text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="file"
              defaultValue={campaignInfo?.image}
              {...register("image")}
            />
          </div>
        </div>
        <span className="text-sm mt-5">Description</span>
        <div className="grid grid-cols-1 space-y-5">
          {/* <Textarea
            size="lg"
            placeholder="description"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="text"
            defaultValue={campaignInfo?.description}
            {...register("description")}
          /> */}
          <EditorToolbar toolbarId={"t2"} />
          <ReactQuill
            theme="snow"
            // value={value}
            // onChange={setValue}
            modules={modules("t2")}
            formats={formats}
            placeholder="Write blog here..."
          />
        </div>
        <IButton className="my-5 flex ml-auto">update</IButton>
      </form>
    </FormCard>
  );
};

export default EditCampaignInfo;
