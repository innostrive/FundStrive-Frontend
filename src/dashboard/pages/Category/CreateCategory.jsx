import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Layout from "../../layout/Layout";

const CreateCategory = () => {
  const axiosSecure = useAxiosSecure();
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", categoryData.name);
    formData.append("description", categoryData.description);
    formData.append("image", categoryData.image);
    try {
      await axiosSecure.post("/api/categories", formData).then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
        }
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };
  return (
    <section>
      <Typography
        color="blue-gray"
        className="text-center font-medium text-2xl my-10 leading-normal"
      >
        Create category for campaign
      </Typography>
      <div className="border border-b border-gray-200 rounded-md p-5 w-3/4 flex mx-auto">
        <Card color="transparent" shadow={false} className="w-full">
          <form onSubmit={handleCategorySubmit} className="mt-8 mb-2">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Category Name
              </Typography>
              <Input
                type="text"
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                id="name"
                name="name"
                value={categoryData.name}
                onChange={handleInputChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
              </Typography>
              <Textarea
                type="text"
                size="lg"
                placeholder="desciption"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                id="description"
                name="description"
                value={categoryData.description}
                onChange={handleInputChange}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Upload Image
              </Typography>
              <Input
                type="file"
                size="lg"
                placeholder="Upload Image"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
      </div>
    </section>
  );
};

export default CreateCategory;
