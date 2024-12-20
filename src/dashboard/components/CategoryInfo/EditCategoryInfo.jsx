import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import ReactQuill from "react-quill";
import { getTranslationObject } from "../../../../i18next";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
const EditCategoryInfo = ({ updateCategory, updateBtn }) => {
  const { id } = useParams();
  const categoryTranslate = getTranslationObject("dashboard");
  const { name, description, status, categoryUpdatedSuccess, error } =
    categoryTranslate.category;
  const { register, handleSubmit, reset } = useForm(); // react-hook-form
  const [categoryInfo, setCategoryInfo] = useState({});
  const [categoryDescription, setCategoryDescription] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/categories/${id}`).then((res) => {
      const userData = res.data.data;
      setCategoryInfo(userData);
      setSelectedStatus(userData?.status);
      setCategoryDescription(userData?.description);
    });
  }, [id, axiosSecure]);

  useEffect(() => {
    reset();
  }, [categoryInfo]);

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
    const categoryData = {
      ...data,
      status: selectedStatus,
      description: categoryDescription,
      image,
    };
    await axiosSecure
      .put(`/api/categories/${id}`, categoryData)
      .then((response) => {
        if (response.status === 200) {
          toast.success(categoryUpdatedSuccess);
          navigate("/admin-dashboard/categories");
        }
      })
      .catch((err) => {
        toast.error(error);
      });
  };
  return (
    <section>
      <FormCard title={updateCategory}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 w-full">
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{name}</span>
              <input
                className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
                type="text"
                defaultValue={categoryInfo?.name}
                {...register("name")}
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <span className="text-sm">{status}</span>
              <select
                label="Select Status"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-auto text-base rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-2 mt-7">
            <span className="text-sm">{description}</span>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={categoryDescription}
              onChange={(value) => setCategoryDescription(value)}
              modules={modules("t2")}
              formats={formats}
              placeholder="Write description here..."
            />
          </div>
          <div className="grid grid-cols-1 mt-7">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
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
          <IButton className="flex ml-auto my-5">{updateBtn}</IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default EditCategoryInfo;
