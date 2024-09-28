import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Banner = () => {
  const axiosSecure = useAxiosSecure();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, handleSubmit } = useForm();
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
    const payload = {
      ...data,
      image: image,
    };
    try {
      await axiosSecure
        .post("/api/banners", payload, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message);
          }
        });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("banner:", payload);
  };
  return (
    <section>
      <div className="border border-b border-gray-200 rounded-md p-5 container mx-auto">
        <Card color="transparent" shadow={false} className="w-full">
          <div className="my-5">
            <span className="text-lg font-medium leading-normal text-gray-700">
              Upload Banner
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
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
                // value={categoryData.name}
                // onChange={handleInputChange}
                {...register("name")}
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
                onChange={handleImage}
                accept="image/*"
              />
              <div>
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
            <Button className="mt-6" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Banner;
