import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAboutVision = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();

  const { refetch, data: aboutVision = [] } = useQuery({
    queryKey: ["aboutVision"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=VISION`);
      return res.data.data.settings;
    },
  });

  const handleAboutVisionDelete = (id) => {
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
          .delete(`/api/settings`, { data })
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

  return [aboutVision, handleAboutVisionDelete];
};

export default useAboutVision;
