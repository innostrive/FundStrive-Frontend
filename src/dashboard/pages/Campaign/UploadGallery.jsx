import { useState } from "react";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FormCard from "../../ui/FormCard";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const UploadGallery = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [fileImagePreview, setFileImagePreview] = useState([]);
  const [fileImage, setFileImage] = useState([]);
  const navigate = useNavigate();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { imageUpload, upload } = dashboardTranslations.form;
  const { campaignDetails } = dashboardTranslations.dashboardTitle;

  const handleFileImage = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = [];
    const fileImages = [];

    files.forEach((file) => {
      fileImages.push(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        filePreviews.push(reader.result);
        if (filePreviews.length === files.length) {
          setFileImagePreview((prev) => [...prev, ...filePreviews]);
        }
      };
      reader.readAsDataURL(file);
    });

    setFileImage((prev) => [...prev, ...fileImages]);
  };

  const handleDeselectImage = (index) => {
    setFileImage((prev) => prev.filter((_, i) => i !== index));
    setFileImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileInput = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("campaign_id", id);
    formData.append("type", "image");
    fileImage.forEach((file) => {
      formData.append("asset", file);
    });

    axiosSecure
      .post("/api/campaigns/asset", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          navigate(`/admin-dashboard/campaigns/campaign-details/${id}`);
        }
      });

    console.log("imageFile:", fileImage);
  };

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink
          to={`/admin-dashboard/campaigns/campaign-details/${id}`}
          className="opacity-60"
        >
          {campaignDetails}
        </NavLink>
        <span className="cursor-context-menu">{imageUpload}</span>
      </Breadcrumbs>
      <FormCard>
        <span className="text-base font-normal text-secondary">
          {imageUpload}
        </span>
        <form onSubmit={handleFileInput}>
          <div className="mt-5">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
            >
              {imageUpload}
            </label>
            <input
              type="file"
              placeholder="Upload Image"
              className="hidden"
              multiple
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileImage}
            />
            <div className="mt-5 flex gap-2 flex-wrap">
              {fileImagePreview.length > 0 &&
                fileImagePreview.map((imagePreview, index) => (
                  <div
                    key={index}
                    className="relative border-2 border-dashed border-gray-400 rounded-md p-2"
                  >
                    <img
                      src={imagePreview}
                      alt=""
                      className="h-32 w-36 object-cover object-center rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeselectImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white h-5 w-5 flex items-center justify-center rounded-full p-1 text-xs"
                    >
                      X
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <IButton type="submit" className="mt-5 flex ml-auto">
            {upload}
          </IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default UploadGallery;
