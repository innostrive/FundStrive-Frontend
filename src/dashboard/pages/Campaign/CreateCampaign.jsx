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
import { Controller, useForm } from "react-hook-form";
import { json, useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const [categories] = useCategoriesData();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

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
      image,
    };

    const formData = new FormData();
    formData.append("image", image);
    // formData.append("data", JSON.stringify(campaignData));

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
              {...register("name", {
                required: "Campaign name is required",
                minLength: {
                  value: 3,
                  message: "Campaign name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Campaign Title */}
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Campaign Title</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              {...register("title", {
                required: "Campaign title is required",
                minLength: {
                  value: 5,
                  message: "Campaign title must be at least 5 characters",
                },
              })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Category</span>

            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field: { onChange } }) => (
                <Select
                  label="Select Category"
                  onChange={onChange}
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
              )}
            />
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Target Amount</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              {...register("target_amount", {
                required: "Target amount is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Target amount must be a valid number",
                },
              })}
            />
            {errors.target_amount && (
              <span className="text-red-500 text-sm">
                {errors.target_amount.message}
              </span>
            )}
          </div>

          {/* Deadline */}
          <div className="grid col-span-2 space-y-2">
            <span className="text-sm">Deadline</span>
            <input
              type="date"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              {...register("deadline", {
                required: "Deadline is required",
              })}
            />
            {errors.deadline && (
              <span className="text-red-500 text-sm">
                {errors.deadline.message}
              </span>
            )}
          </div>
          <div className="col-span-2 space-y-2">
            <span className="grid grid-cols-1 space-y-2">Description</span>
            <EditorToolbar toolbarId={"t2"} />
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules("t2")}
                    formats={formats}
                    placeholder="Write description here..."
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error.message}</p>
                  )}
                </>
              )}
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
