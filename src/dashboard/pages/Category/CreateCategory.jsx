import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import { NavLink, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";
const CreateCategory = () => {
  const axiosSecure = useAxiosSecure();
  const categoryTranslate = getTranslationObject("dashboard");
  const {
    categories,
    createCategory,
    name,
    description,
    submit,
    categoryCreateSuccess,
    error,
  } = categoryTranslate.category;
  const { nameErr, descriptionErr } = categoryTranslate.errors;
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const {
    handleSubmit,
    control,
    register,
    clearErrors,
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
    const formData = new FormData();

    const postData = {
      ...data,
      image,
    };
    try {
      await axiosSecure
        .post("/api/categories", postData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(categoryCreateSuccess);
            navigate("/admin-dashboard/categories");
          }
        });
    } catch (err) {
      toast.error(error);
    }
  };

  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/categories" className="opacity-60">
          {categories}
        </NavLink>
        <span className="cursor-context-menu">{createCategory}</span>
      </Breadcrumbs>
      <FormCard title="Create category">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="mb-1 grid gap-6">
            <span className="-mb-3 text-sm text-secondary">{name}</span>
            <input
              type="text"
              name="name"
              {...register("name", { required: nameErr })}
              className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
            <span className="-mb-3 text-sm text-secondary">{description}</span>
            <EditorToolbar toolbarId={"t2"} />
            <Controller
              name="description"
              control={control}
              rules={{ required: descriptionErr }}
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
          <div className="col-span-2 mt-5">
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
              {...register("image", {
                required: "Image is required",
              })}
              onChange={(e) => {
                handleImage(e);
                clearErrors("image");
              }}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
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
          <IButton className="flex ml-auto">{submit}</IButton>
        </form>
      </FormCard>
    </DashboardLayout>
  );
};

export default CreateCategory;
