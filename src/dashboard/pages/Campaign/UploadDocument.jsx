import { useForm } from "react-hook-form";
import { useState } from "react";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FormCard from "../../ui/FormCard";

const UploadDocument = () => {
  const axiosSecure = useAxiosSecure();
  const [filePreview, setFilePreview] = useState([]);
  const [file, setFile] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("campaign_id", id);
    formData.append("asset", file);
    formData.append("type", "document");
    formData.append("data", JSON.stringify(formData));

    // axiosSecure
    //   .post("/api/campaigns/asset", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       toast.success(res.data.message);
    //     }
    //   });

    console.log("imageFile:", formData.get(Object.fromEntries(formData)));
  };

  return (
    <FormCard title="Upload Document">
      <form onSubmit={handleFileInput}>
        <div className="mt-5">
          <label
            htmlFor="image"
            className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
          >
            Upload Document
          </label>
          <input
            type="file"
            placeholder="Upload Document"
            className="hidden"
            multiple
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => handleFile(e)}
          />
          <div className="mt-5 flex gap-2">
            {filePreview.length > 0 &&
              filePreview.map((imagePreview) => (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                  <img
                    src={filePreview}
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

export default UploadDocument;
