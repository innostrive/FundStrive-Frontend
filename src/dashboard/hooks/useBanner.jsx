import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useBanner = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: banners = [] } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners");
      return res.data.data.banners;
    },
  });

  const handleBannerDelete = (id) => {
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
          .delete("/api/banners", { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
              refetch();
            } else {
              toast.warning("Banner not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  return [banners, handleBannerDelete];
};

export default useBanner;
