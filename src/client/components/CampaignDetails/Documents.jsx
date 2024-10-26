import { FaFilePdf } from "react-icons/fa6";

const Documents = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const openPdfInNewTab = () => {
    const newTab = window.open(url + item?.asset, "_blank");
    newTab.focus();
  };
  const documentUrl = url + item?.asset;
  const fileName = documentUrl.split("/").pop();
  return (
    <button
      onClick={openPdfInNewTab}
      className="open-btn h-20 w-32 rounded-md border bg-white"
    >
      <FaFilePdf size={40} className="text-red-400 flex mx-auto" />
      <span className="text-xs font-normal">{fileName}</span>
    </button>
  );
};

export default Documents;
