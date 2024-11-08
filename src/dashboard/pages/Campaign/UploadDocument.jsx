import { useForm } from "react-hook-form";
import { useState } from "react";
import IButton from "../../ui/IButton";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FormCard from "../../ui/FormCard";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { SlDocs } from "react-icons/sl";
import { BsFiletypeXls } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { getTranslationObject } from "../../../../i18next";
// Define SVG icons directly for each file type
const fileIcons = {
  pdf: <AiOutlineFilePdf className="text-red-400 size-5" />,
  doc: <SlDocs className="text-blue-500 size-5" />,
  xlsx: <BsFiletypeXls className="text-green-600 size-5" />,
  default: <IoDocumentTextOutline className="text-blue-600 size-5" />,
};

const UploadDocument = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [filePreview, setFilePreview] = useState([]);
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { campaignDetails, uploadDocument, upload } =
    dashboardTranslations.dashboardTitle;

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile((prev) => [...prev, selectedFile]);

    // Determine the file extension and store it with the file preview
    const extension = selectedFile.name.split(".").pop().toLowerCase();
    setFilePreview((prev) => [
      ...prev,
      {
        icon: fileIcons[extension] || fileIcons.default,
        name: selectedFile.name,
      },
    ]);
  };

  const handleFileInput = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("campaign_id", id);
    formData.append("type", "document");

    file.forEach((fileItem) => {
      formData.append("asset", fileItem);
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
        } else {
          toast.warning("Something went wrong!");
          navigate(`/admin-dashboard/campaigns/campaign-details/${id}`);
        }
      });
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
        <span className="cursor-context-menu">{uploadDocument}</span>
      </Breadcrumbs>
      <FormCard title="Upload Document">
        <form onSubmit={handleFileInput}>
          <div className="mt-5">
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
            >
              {uploadDocument}
            </label>
            <input
              type="file"
              className="hidden"
              multiple
              id="image"
              name="image"
              accept=".pdf, .doc, .docx, .xls, .xlsx"
              onChange={handleFile}
            />
            <div className="mt-5 flex gap-2">
              {filePreview.length > 0 &&
                filePreview.map((file, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-md p-2 flex flex-col items-center justify-center overflow-hidden"
                  >
                    {file.icon}
                    <p className="text-sm text-center break-words mt-2">
                      {file.name}
                    </p>
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

export default UploadDocument;
