import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useCampaignGallery = (id) => {
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const { refetch, data: gallery = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=image&campaign_id=${id}`
      );
      console.log("gallery:", res.data.data);
      return res.data.data;
    },
  });

  const handleGalleryDelete = (id) => {
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
          .delete("/api/campaigns/asset", { data })
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
            console.error(error);
          });
      }
    });
  };

  return [gallery, handleGalleryDelete];
};

export default useCampaignGallery;
