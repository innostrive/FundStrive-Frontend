import {
  Breadcrumbs,
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import { Add } from "../../assets/icons/icons";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const BlogCreate = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    blogs,
    uploadBlog,
    title,
    tag,
    content,
    uploadImage,
    submit,
    titleError,
    tagError,
    contentError,
    blogCreateSuccess,
    error,
  } = dashboardTranslations.blog;
  const {
    register,
    handleSubmit,
    control,
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

  const onSubmit = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      image,
    };

    axiosSecure
      .post("/api/posts", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(blogCreateSuccess);
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
      <FormCard title="Upload Blog">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {title}
            </Typography>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="title"
              name="title"
              {...register("title", {
                required: titleError,
              })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}

            {/* Tags */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {tag}
            </Typography>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="tags"
              name="tags"
              {...register("tags", {
                required: tagError,
              })}
            />
            {errors.tags && (
              <span className="text-red-500 text-sm">
                {errors.tags.message}
              </span>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {content}
            </Typography>
            <EditorToolbar toolbarId={"t2"} />
            <Controller
              name="content"
              control={control}
              rules={{ required: contentError }}
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
                    placeholder="Write content here..."
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-full w-full border border-gray-400 p-2 rounded-md"
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
          <IButton className="flex ml-auto my-5">{submit}</IButton>
        </form>
      </FormCard>
    </DashboardLayout>
  );
};

export default BlogCreate;
