import { Breadcrumbs, Input, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import axios from "axios";
import useReviewData from "../../hooks/useReviewData";
import EditBlogReview from "./EditBlogReview";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const EditBlog = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [blogData, setBlogData] = useState({});
  const [blogContent, setBlogContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  const [reviews, refetch] = useReviewData();
  const URL = import.meta.env.VITE_BASE_URL;

  const blogReviews = reviews.filter((item) => item.post_id === id);
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    blogs,
    uploadBlog,
    title,
    tag,
    content,
    uploadImage,
    update,
    commentDeleted,
    blogUpdatedSuccess,
    error,
  } = dashboardTranslations.blog;
  const handleDelete = async (id) => {
    console.log("id:", id);
    const data = {
      ids: [id],
    };
    await axios.delete(`${URL}/reviews`, { data }).then((res) => {
      if (res.status === 200) {
        toast.success(commentDeleted);
        refetch();
      }
    });
  };

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

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview("");
  };

  const handleContentChange = (value) => {
    setBlogContent(value);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const postData = {
      ...data,
      content: blogContent,
      image,
    };
    axiosSecure
      .put(`/api/posts/${id}`, postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(blogUpdatedSuccess);
          navigate("/admin-dashboard/blogs");
        } else {
          toast.error(error);
        }
      });
  };
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/blogs" className="opacity-60">
          {blogs}
        </NavLink>
        <span className="cursor-context-menu">{uploadBlog}</span>
      </Breadcrumbs>
      <FormCard title="Update Blog">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {title}
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
              {tag}
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
              {content}
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
            <div className="grid grid-cols-1 col-span-2 space-y-2">
              <span className="text-sm">Image</span>
              <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                <img
                  src={imageUrl + blogData?.image}
                  alt="user"
                  className="h-full w-full object-cover object-center rounded-md"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
            <label
              htmlFor="image"
              className="text-base text-black text-center font-medium cursor-pointer block h-full w-full border border-gray-400 p-2 rounded-md"
            >
              {uploadImage}
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
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2 relative">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs p-1 rounded-full size-6 flex items-center justify-center"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
          <IButton className="flex ml-auto my-5">{update}</IButton>
        </form>
        <div className="space-y-5 my-10">
          <span>Total Comments {blogReviews.length}</span>
          {blogReviews.map((review) => (
            <EditBlogReview review={review} handleDelete={handleDelete} />
          ))}
        </div>
      </FormCard>
    </DashboardLayout>
  );
};

export default EditBlog;
