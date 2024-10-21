import { useState } from "react";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FormCard from "../../ui/FormCard";
import { useParams } from "react-router-dom";

const UploadGallery = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [fileImagePreview, setFileImagePreview] = useState([]);
  const [fileImage, setFileImage] = useState([]);

  const handleFileImage = (e) => {
    const file = e.target.files[0];
    setFileImage((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileImagePreview((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
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
        }
      });

    console.log("imageFile:", fileImage);
  };

  return (
    <FormCard>
      {" "}
      <span className="text-base font-normal text-secondary">Image Upload</span>
      <form onSubmit={handleFileInput}>
        <div className="mt-5">
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
            multiple
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => handleFileImage(e)}
          />
          <div className="mt-5 flex gap-2">
            {fileImagePreview.length > 0 &&
              fileImagePreview.map((imagePreview) => (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
              ))}
          </div>
        </div>
        <IButton type="submit" className="mt-5 flex ml-auto">
          Upload
        </IButton>
      </form>
    </FormCard>
  );
};

export default UploadGallery;
