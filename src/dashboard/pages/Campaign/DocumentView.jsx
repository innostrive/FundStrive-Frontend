import { FaFilePdf } from "react-icons/fa6";

const DocumentView = ({ asset }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const openPdfInNewTab = () => {
    const newTab = window.open(url + asset, "_blank");
    newTab.focus();
  };
  const documentUrl = url + asset;
  const fileName = documentUrl.split("/").pop();
  return (
    <div
      className="flex flex-col items-center space-y-5 h-auto w-32 cursor-pointer overflow-hidden"
      onClick={openPdfInNewTab}
    >
      <FaFilePdf size={20} className="text-red-400" />
      <span className="text-xs text-center font-normal">{fileName}</span>
    </div>
  );
};

export default DocumentView;
