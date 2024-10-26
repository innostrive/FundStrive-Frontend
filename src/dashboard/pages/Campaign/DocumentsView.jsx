import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useCampaignGallery from "../../hooks/useCampaignGallery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DocumentView from "./DocumentView";

const DocumentsView = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const { data: documents = [] } = useQuery({
    queryKey: ["documents"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=document&campaign_id=${id}`
      );
      return res.data.data;
    },
  });

  const handleDocumentDelete = (_id) => {
    const data = { ids: [_id] };
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/campaigns/asset`, { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
              refetch();
            } else {
              toast.warning("Image is not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  return (
    <FormCard title="Campaign Documents">
      <div className="flex gap-5">
        {documents.map((document) => (
          <DocumentView
            document={document}
            handleDocumentDelete={handleDocumentDelete}
            key={document?._id}
          />
        ))}
      </div>
    </FormCard>
  );
};

export default DocumentsView;
