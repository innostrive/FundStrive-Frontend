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

const CreateCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const { categories } = useCategoriesData();
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [campaignData, setCampaignData] = useState({
    name: "",
    description: "",
    image: null,
    category: "", // Add this line to track selected category
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setCampaignData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCategoryChange = (value) => {
    console.log(value);
    setCampaignData((prevData) => ({
      ...prevData,
      category: value, // Material Tailwind Select returns the value directly
    }));
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", campaignData.name);
    formData.append("title", campaignData.title);
    formData.append("description", campaignData.description);
    formData.append("category", campaignData.category);
    formData.append("target_amount", campaignData.target_amount);
    formData.append("raised_amount", campaignData.raised_amount);
    formData.append("deadline", campaignData.deadline);
    formData.append("image", campaignData.image);

    // try {
    //   await axiosSecure
    //     .post("/api/campaigns", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((response) => {
    //       if (response.status === 200) {
    //         toast.success(response.data.message);
    //       }
    //       console.log("campaign:", response);
    //     });
    // } catch (err) {
    //   toast.error(err);
    //   console.log(err);
    // }
    console.log("campaign:", formData.get("category"));
  };

  return (
    <FormCard title="Create Campaign">
      <form onSubmit={handleCategorySubmit} className="mt-8 mb-2">
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Campaign Name</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="name"
              name="name"
              value={campaignData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Campaign Title</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="title"
              name="title"
              value={campaignData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Category</span>
            <Select
              label="Select Category"
              value={categories?._id}
              onChange={handleCategoryChange}
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
              id="targetAmount"
              name="target_amount"
              value={campaignData.target_amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Raised Amount</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="raisedAmount"
              name="raised_amount"
              value={campaignData.raised_amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Deadline</span>
            <input
              type="date"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="deadline"
              name="deadline"
              value={campaignData.deadline}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <span className="grid grid-cols-1 space-y-2">Description</span>
            {/* <Textarea
              type="text"
              size="lg"
              
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="description"
              name="description"
              value={campaignData.description}
              onChange={handleInputChange}
            /> */}
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              // value={value}
              // onChange={setValue}
              modules={modules("t2")}
              formats={formats}
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
