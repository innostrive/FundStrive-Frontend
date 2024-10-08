import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCategoriesData from "../../hooks/useCategoriesData";
import IButton from "../../ui/IButton";
import FormCard from "../../ui/FormCard";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import { useForm } from "react-hook-form";
import { json, useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const { categories } = useCategoriesData();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    const campaignData = {
      ...data,
      category,
      description,
      image,
    };

    try {
      await axiosSecure
        .post("/api/campaigns", campaignData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
            reset();
            navigate("/dashboard/campaign");
          }
          console.log("campaign:", response);
        });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    // console.log("campaign:", formData.get("data"));
    console.log("campaignCreate:", campaignData);
  };

  return (
    <FormCard title="Create Campaign">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Campaign Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              // value={campaignData.name}
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Campaign Title</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              // value={campaignData.title}
              {...register("title")}
            />
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Category</span>
            <Select
              label="Select Category"
              value={categories?._id}
              onChange={setCategory}
              name="category"
            >
              {categories.map((category) => (
                <Option
                  key={category?._id}
                  value={category?._id}
                  className="text-black"
                >
                  {category?.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Target Amount</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              // value={campaignData.target_amount}
              {...register("target_amount")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Raised Amount</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              // value={campaignData.raised_amount}
              {...register("raised_amount")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Deadline</span>
            <input
              type="date"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              {...register("deadline")}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <span className="grid grid-cols-1 space-y-2">Description</span>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules("t2")}
              formats={formats}
              placeholder="Type description here..."
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
            >
              Upload Image
            </label>
            <input
              type="file"
              className="hidden"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <div className="mt-5">
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <IButton className="my-5 flex ml-auto">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateCampaign;
