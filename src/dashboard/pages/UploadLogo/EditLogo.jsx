import { useNavigate, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import IButton from "../../ui/IButton";

const EditLogo = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [partnerImage, setPartnerImage] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setPartnerImage(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, [id]);

  useEffect(() => {
    reset();
  }, [partnerImage]);

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
    formData.append("image", image);
    const bannerData = {
      ...data,
      image,
      status: selectedStatus,
    };
    await axiosSecure
      .put(`/api/banners/${id}`, bannerData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Server response:", response);
        toast.success(response.data.message);
        navigate("/dashboard/partner-gallery");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        toast.error(error);
      });
    console.log("bannerData:", bannerData);
  };

  return (
    <FormCard title="Update Logo">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="space-y-5">
          {/* <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Name</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              {...register("name")}
              defaultValue={partnerImage?.name}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">Slug</span>
            <input
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              type="text"
              defaultValue={partnerImage?.slug}
              {...register("slug")}
            />
          </div> */}
          <div className="col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-full text-base rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
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
    </FormCard>
  );
};

export default EditLogo;
