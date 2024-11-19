import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { getTranslationObject } from "../../../i18next";

const useAboutHeader = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();
  const translate = getTranslationObject("dashboard");
  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;

  const { refetch, data: aboutDetails = [] } = useQuery({
    queryKey: ["ABOUTDETAILS"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=ABOUTDETAILS`);
      return res.data.data.settings;
    },
  });

  const handleAboutHeaderDelete = (id) => {
    const data = { ids: [id] };

    Swal.fire({
      title: deletePermission,
      text: warning,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: permissionSuccess,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/settings`, { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success(deleteSuccess);
              refetch();
            } else {
              toast.warning(error);
            }
          })
          .catch((error) => {
            toast.error(error);
            console.error(error);
          });
      }
    });
  };

  return [aboutDetails, handleAboutHeaderDelete];
};

export default useAboutHeader;
