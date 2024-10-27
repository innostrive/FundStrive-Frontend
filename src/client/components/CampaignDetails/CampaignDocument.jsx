import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Documents from "./Documents";
const CampaignDocument = ({ campaignId }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { data: documents = [] } = useQuery({
    queryKey: ["campaign-document"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=document&campaign_id=${campaignId}`
      );
      return res.data.data;
    },
  });

  return (
    <div className="flex gap-5 flex-wrap">
      {documents.map((item) => (
        <Documents item={item} key={item?._id} />
      ))}
    </div>
  );
};

export default CampaignDocument;
