import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { getTranslationObject } from "../../../i18next";

const useContactInfo = () => {
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;

  const translate = getTranslationObject("dashboard");
  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;

  const { refetch, data: contactInfo = [] } = useQuery({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/contact-us`);
      return res.data.data.contactUs;
    },
  });

  const handleContactInfoDelete = (id) => {
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
          .delete("/api/contact-us", { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success(deleteSuccess);
              refetch();
            } else {
              toast.warning(error);
            }
          })
          .catch((err) => {
            toast.error(error);
          });
      }
    });
  };

  return [contactInfo, handleContactInfoDelete];
};

export default useContactInfo;
