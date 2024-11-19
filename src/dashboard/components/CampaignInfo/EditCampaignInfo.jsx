import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import useCategoriesData from "../../hooks/useCategoriesData";
import EditCampaignReview from "./EditCampaignReview";
import { getTranslationObject } from "../../../../i18next";
const EditCampaignInfo = ({ handleDelete, campaignReviews }) => {
  const { id } = useParams();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [categories] = useCategoriesData();
  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [deadline, setDeadline] = useState("");
  const [campaignInfo, setCampaignInfo] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [campaignDescription, setCampaignDescription] = useState("");
  const dashboardTranslations = getTranslationObject("dashboard");
  const { createCampaign, campaigns, submit } =
    dashboardTranslations.dashboardTitle;
  const {
    campaignName,
    campaignTitle,
    category,
    targetAmount,
    deadline: deadlineAmount,
    uploadImage,
    description,
    status,
    updateBtn,
    reviews,
    error,
    campaignUpdateSuccess,
  } = dashboardTranslations.form;

  useEffect(() => {
    axiosSecure.get(`/campaigns/${id}`).then((res) => {
      const userData = res.data.data;
      setCampaignInfo(userData);
      setSelectedCategory(userData?.category);
      setCampaignDescription(userData?.description);
      setSelectedStatus(userData.status);
      setDeadline(userData?.deadline);
    });
  }, [id, axiosSecure]);

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

  useEffect(() => {
    reset();
  }, [campaignInfo, id]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", image);
    const campaignData = {
      ...data,
      status: selectedStatus,
      category: selectedCategory,
      description: campaignDescription,
      deadline: deadline,
      image,
    };
    axiosSecure
      .put(`/api/campaigns/${id}`, campaignData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(campaignUpdateSuccess);
          navigate("/admin-dashboard/campaigns");
        }
      })
      .catch((err) => {
        toast.error(error);
      });
  };
  return (
    <FormCard title="Update Campaign">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{campaignName}</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.name}
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{campaignTitle}</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.title}
              {...register("title")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{targetAmount}</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={campaignInfo?.target_amount}
              {...register("target_amount")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{deadlineAmount}</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="date"
              defaultValue={
                campaignInfo?.deadline
                  ? new Date(campaignInfo.deadline).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 space-y-5">
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
          <div className="grid grid-cols-1 space-y-5">
            <span className="text-sm">{category}</span>
            <select
              label="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-auto text-base rounded"
            >
              {categories.map((category, i) => (
                <option key={i} value={category?._id} className="text-black">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <div className="space-y-5">
              <span className="text-sm mt-5">{description}</span>
              <EditorToolbar toolbarId={"t2"} />
              <ReactQuill
                theme="snow"
                value={campaignDescription}
                onChange={(value) => setCampaignDescription(value)}
                modules={modules("t2")}
                formats={formats}
                placeholder="Write description here..."
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
              <img
                src={imageUrl + campaignInfo?.image}
                crossOrigin="anonymous"
                alt="Image preview"
                className="h-full w-full object-cover object-center rounded-md"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="fileImage"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
            >
              {uploadImage}
            </label>
            <input
              multiple
              type="file"
              placeholder="Upload Image"
              className="hidden"
              id="fileImage"
              name="fileImage"
              accept="image/*"
              onChange={handleImage}
            />
            <div className="mt-5 flex gap-2">
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2 relative">
                  <img
                    src={imagePreview}
                    alt="Image preview"
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
        </div>
        <IButton className="my-5 flex ml-auto">{updateBtn}</IButton>
      </form>
      <div className="space-y-5">
        <span>
          {reviews}: {campaignReviews?.length}
        </span>
        {campaignReviews.map((campaignReview, i) => (
          <EditCampaignReview
            key={i}
            campaignReview={campaignReview}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {/* <div className="my-16">
        <EditCampaignFile id={id} />
      </div> */}
    </FormCard>
  );
};

export default EditCampaignInfo;
