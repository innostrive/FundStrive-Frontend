import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { getTranslationObject } from "../../../i18next";

const useUsersData = () => {
  const axiosSecure = useAxiosSecure();
  const translate = getTranslationObject("dashboard");

  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data.data.users;
    },
  });

  const handleUserDelete = (id) => {
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
          .delete("/api/users", { data })
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
          });
      }
    });
  };

  return [users, handleUserDelete];
};

export default useUsersData;
