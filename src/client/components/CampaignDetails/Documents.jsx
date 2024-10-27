import { FaFileAlt, FaFileExcel, FaFileWord } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

const Documents = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const openPdfInNewTab = () => {
    const newTab = window.open(url + item?.asset, "_blank");
    newTab.focus();
  };
  const documentUrl = url + item?.asset;
  const fileName = documentUrl.split("/").pop();
  const extension = fileName.substring(fileName.lastIndexOf(".") + 1);
  return (
    <button
      onClick={openPdfInNewTab}
      className="open-btn h-32 w-auto px-5 rounded-md border space-y-2 bg-white"
    >
      <span>
        {" "}
        {extension === "pdf" ? (
          <FaFilePdf size={40} className="text-red-400 flex mx-auto" />
        ) : extension === "doc" || extension === "docx" ? (
          <FaFileWord size={40} className="text-blue-400 flex mx-auto" />
        ) : extension === "xls" || extension === "xlsx" ? (
          <FaFileExcel size={40} className="text-green-400 flex mx-auto" />
        ) : (
          <FaFileAlt size={40} className="text-gray-400 flex mx-auto" /> // Default icon
        )}
      </span>
      <span className="text-xs font-normal">{fileName}</span>
    </button>
  );
};

export default Documents;
