import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";

const EditBlog = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [blogData, setBlogData] = useState({});
  const [blogContent, setBlogContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    axiosSecure.get(`/posts/${id}`).then((response) => {
      const content = response.data.data;
      setBlogData(content);
      setBlogContent(content?.content);
    });
  }, [id, axiosSecure]);

  useEffect(() => {
    reset();
  }, [blogData]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleContentChange = (value) => {
    setBlogContent(value);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      content: blogContent,
    };

    formData.append("data", JSON.stringify(postData));

    if (image) {
      formData.append("image", image);
    } else {
      toast.error("image is missing");
    }
    // console.log("blogData:", formData.get("data"));
    // console.log("blogData:", formData.get("image"));

    axiosSecure
      .put(`/api/posts/${id}`, postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Blog created successfully!!!");
          console.log("blog:", response.data.message);
        } else {
          toast.error("Something went wrong!!!");
          console.log("blog:", response.data.message);
        }
      });
  };
  return (
    <section className="border border-b border-gray-200 rounded-md p-5 w-3/4 flex mx-auto">
      <Card color="transparent" shadow={false} className="w-full">
        <Typography variant="h4" color="blue-gray">
          Update Blog
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ttile
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
              name="title"
              {...register("title")}
              defaultValue={blogData?.title}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tags
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="desciption"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="description"
              name="tags"
              {...register("tags")}
              defaultValue={blogData?.tags}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Content
            </Typography>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={blogContent}
              onChange={handleContentChange}
              placeholder={"Write something awesome..."}
              modules={modules("t2")}
              formats={formats}
            />
            <label
              htmlFor="image"
              className="text-base text-black text-center font-medium cursor-pointer block h-full w-full border border-gray-400 p-2 rounded-md"
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
              onChange={(e) => handleImage(e)}
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
            Update
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default EditBlog;
