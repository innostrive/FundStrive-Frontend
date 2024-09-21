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
import Layout from "../../layout/Layout";
import useCategoriesData from "../../hooks/useCategoriesData";

const CreateCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const categories = useCategoriesData();

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

    try {
      await axiosSecure.post("/api/campaigns", formData).then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
        }
        console.log("campaign:", response);
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("campaign:", formData);
  };

  return (
    <Layout>
      <Card color="transparent" shadow={false} className="w-full">
        <Typography variant="h4" color="blue-gray">
          Create category for campaign
        </Typography>
        <form
          onSubmit={handleCategorySubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Campaign Name
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="name"
              name="name"
              value={campaignData.name}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Campaign Title
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="title"
              name="title"
              value={campaignData.title}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Textarea
              type="text"
              size="lg"
              placeholder="description"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="description"
              name="description"
              value={campaignData.description}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Category
            </Typography>
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
            {/* Additional fields like Target Amount, Raised Amount, Deadline, etc. */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Target Amount
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="target amount"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="targetAmount"
              name="target_amount"
              value={campaignData.target_amount}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Raised Amount
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="raised amount"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="raisedAmount"
              name="raised_amount"
              value={campaignData.raised_amount}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Deadline
            </Typography>
            <Input
              type="date"
              size="lg"
              placeholder="deadline"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="deadline"
              name="deadline"
              value={campaignData.deadline}
              onChange={handleInputChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Upload Image
            </Typography>
            <Input
              type="file"
              size="lg"
              placeholder="Upload Image"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="image"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </Layout>
  );
};

export default CreateCampaign;
