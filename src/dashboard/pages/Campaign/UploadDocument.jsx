// // import { useForm } from "react-hook-form";
// // import { useState } from "react";
// // import IButton from "../../ui/IButton";
// // import { toast } from "react-toastify";
// // import useAxiosSecure from "../../hooks/useAxiosSecure";
// // import FormCard from "../../ui/FormCard";
// // import { NavLink, useNavigate, useParams } from "react-router-dom";
// // import { Breadcrumbs } from "@material-tailwind/react";

// // const UploadDocument = () => {
// //   const { id } = useParams();
// //   const axiosSecure = useAxiosSecure();
// //   const [filePreview, setFilePreview] = useState([]);
// //   const [file, setFile] = useState([]);
// //   const navigate = useNavigate();
// //   const handleFile = (e) => {
// //     const file = e.target.files[0];
// //     setFile((prev) => [...prev, file]);
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setFilePreview((prev) => [...prev, reader.result]);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleFileInput = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("campaign_id", id);
// //     formData.append("type", "document");
// //     file.forEach((file) => {
// //       formData.append("asset", file);
// //     });

// //     axiosSecure
// //       .post("/api/campaigns/asset", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //         },
// //       })
// //       .then((res) => {
// //         if (res.status === 200) {
// //           toast.success(res.data.message);
// //         } else {
// //           toast.warning("Something wrong!!!");
// //           navigate(`/admin-dashboard/campaigns/campaign-details/${id}`);
// //         }
// //       });

// //     console.log("document:", file);
// //   };

// //   return (
// //     <section>
// //       <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
// //         <NavLink
// //           to={`/admin-dashboard/campaigns/campaign-details/${id}`}
// //           className="opacity-60"
// //         >
// //           Campaign Details
// //         </NavLink>
// //         <span className="cursor-context-menu">Upload Documents</span>
// //       </Breadcrumbs>
// //       <FormCard title="Upload Document">
// //         <form onSubmit={handleFileInput}>
// //           <div className="mt-5">
// //             <label
// //               htmlFor="image"
// //               className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
// //             >
// //               Upload Document
// //             </label>
// //             <input
// //               type="file"
// //               placeholder="Upload Document"
// //               className="hidden"
// //               multiple
// //               id="image"
// //               name="image"
// //               accept=".pdf, .doc, .docx, .xls, .xlsx"
// //               onChange={(e) => handleFile(e)}
// //             />
// //             <div className="mt-5 flex gap-2">
// //               {filePreview.length > 0 &&
// //                 filePreview.map((file) => (
// //                   <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
// //                     <img
// //                       src={file}
// //                       alt=""
// //                       className="h-full w-full object-cover object-center rounded-md"
// //                     />
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //           <IButton type="submit" className="mt-5 flex ml-auto">
// //             Upload
// //           </IButton>
// //         </form>
// //       </FormCard>
// //     </section>
// //   );
// // };

// // export default UploadDocument;

// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import IButton from "../../ui/IButton";
// import { toast } from "react-toastify";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import FormCard from "../../ui/FormCard";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { Breadcrumbs } from "@material-tailwind/react";

// // Define icons for different document types
// const fileIcons = {
//   pdf: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="h-16 w-16 text-red-500"
//     >
//       <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zM11 15H8.5v2H7V9h4a2 2 0 0 1 0 4h-2.5v2H11zm8 0h-1.1l-1-1.7-1.1 1.7H14l2.3-4L14 9h1.2l1 1.7 1.1-1.7h1.1l-2.3 4zM11 13V9h-2.5v2H11a1 1 0 0 1 0 2z" />
//     </svg>
//   ),
//   doc: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="h-16 w-16 text-blue-500"
//     >
//       <path d="M4 2h8l6 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 7h4V4h-1v3H7v2h4z" />
//     </svg>
//   ),
//   docx: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="h-16 w-16 text-blue-500"
//     >
//       <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm4.5 15-1.1-1.7-1 1.7H13l2.3-4L13 9h1.2l1 1.7 1.1-1.7H17l-2.3 4zM8.5 10h2V9H7v2h1.5zm2.5 1v-1h-2v2h1.5v1h-1.5v2h3v-2H11v-1h1.5v-1H11zm4 1v-2h1.5v-1H11v2h1.5zm1-5V4H7v2h8.5zm-6-1V4h-2.5v2H11z" />
//     </svg>
//   ),
//   xls: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="h-16 w-16 text-green-500"
//     >
//       <path d="M4 2h8l6 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4.6 11L9 14.4 7.4 13l-1.2 1.2L9 16.8 12.8 13 11.6 12l-1.8 1.8z" />
//     </svg>
//   ),
//   xlsx: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 24 24"
//       className="h-16 w-16 text-green-500"
//     >
//       <path d="M4 2h8l6 6v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4.6 11L9 14.4 7.4 13l-1.2 1.2L9 16.8 12.8 13 11.6 12l-1.8 1.8z" />
//     </svg>
//   ),
// };

// const UploadDocument = () => {
//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const [filePreview, setFilePreview] = useState([]);
//   const [file, setFile] = useState([]);
//   const navigate = useNavigate();

//   const handleFile = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile((prev) => [...prev, selectedFile]);

//     if (selectedFile) {
//       // Determine the file extension
//       const extension = selectedFile.name.split(".").pop().toLowerCase();

//       // Get the icon based on file extension
//       const icon = fileIcons[extension] || "path/to/default-icon.png";

//       setFilePreview((prev) => [
//         ...prev,
//         { url: icon, name: selectedFile.name },
//       ]);
//     }
//   };

//   const handleFileInput = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("campaign_id", id);
//     formData.append("type", "document");

//     file.forEach((fileItem) => {
//       formData.append("asset", fileItem);
//     });

//     axiosSecure
//       .post("/api/campaigns/asset", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           toast.success(res.data.message);
//         } else {
//           toast.warning("Something went wrong!");
//           navigate(`/admin-dashboard/campaigns/campaign-details/${id}`);
//         }
//       });
//   };

//   return (
//     <section>
//       <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
//         <NavLink
//           to={`/admin-dashboard/campaigns/campaign-details/${id}`}
//           className="opacity-60"
//         >
//           Campaign Details
//         </NavLink>
//         <span className="cursor-context-menu">Upload Documents</span>
//       </Breadcrumbs>
//       <FormCard title="Upload Document">
//         <form onSubmit={handleFileInput}>
//           <div className="mt-5">
//             <label
//               htmlFor="image"
//               className="text-base text-black font-medium text-center cursor-pointer block h-10 w-full border-gray-300 border p-2 rounded-md"
//             >
//               Upload Document
//             </label>
//             <input
//               type="file"
//               className="hidden"
//               multiple
//               id="image"
//               name="image"
//               accept=".pdf, .doc, .docx, .xls, .xlsx"
//               onChange={handleFile}
//             />
//             {/* <div className="mt-5 flex gap-2">
//               {filePreview.length > 0 &&
//                 filePreview.map((file, index) => (
//                   <div
//                     key={index}
//                     className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-md p-2 flex flex-col items-center justify-center"
//                   >
//                     <img
//                       src={file.url}
//                       alt={file.name}
//                       className="h-16 w-16 object-contain mb-2"
//                     />
//                     <p className="text-sm text-center break-words">
//                       {file.name}
//                     </p>
//                   </div>
//                 ))}
//             </div> */}
//             <div className="mt-5 flex gap-2">
//               {filePreview.length > 0 &&
//                 filePreview.map((file, index) => (
//                   <div
//                     key={index}
//                     className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-md p-2 flex flex-col items-center justify-center"
//                   >
//                     {file.icon}
//                     <p className="text-sm text-center break-words mt-2">
//                       {file.name}
//                     </p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//           <IButton type="submit" className="mt-5 flex ml-auto">
//             Upload
//           </IButton>
//         </form>
//       </FormCard>
//     </section>
//   );
// };

// export default UploadDocument;

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
          Campaign Details
        </NavLink>
        <span className="cursor-context-menu">Upload Documents</span>
      </Breadcrumbs>
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
            Upload
          </IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default UploadDocument;
