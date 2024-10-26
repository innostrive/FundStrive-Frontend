import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCampaignData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: campaigns = [] } = useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get("/campaigns");
      return res.data.data.campaigns;
    },
  });

  const handleCampaignDelete = (id) => {
    const data = { ids: [id] };

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
          .delete("/api/campaigns", { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
              refetch();
            } else {
              toast.warning("Category not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
          });
      }
    });
  };

  return [campaigns, handleCampaignDelete];
};

export default useCampaignData;
