import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Layout from "../../layout/Layout";
import Form from "../../components/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import categorySchema from "../../schemas/category.schema";
import TextInput from "../../ui/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import { json, useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
const CreateCategory = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [value, setValue] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const methods = useForm();
  const { handleSubmit } = methods;

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
      description: value,
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
            toast.success(response.data.message);
            navigate("/dashboard/category");
          }
        });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
    console.log("data", Object.fromEntries(formData));
  };
  return (
    <section>
      <FormCard title="Create category">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
            <div className="mb-1 grid gap-6">
              <TextInput type="text" name="name" label="Name" />
              <span className="-mb-3 text-sm text-secondary">Description</span>
              <EditorToolbar toolbarId={"t2"} />
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules("t2")}
                formats={formats}
                placeholder="Write description here..."
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
            <IButton className="flex ml-auto">Submit</IButton>
          </form>
        </FormProvider>
      </FormCard>
    </section>
  );
};

export default CreateCategory;
