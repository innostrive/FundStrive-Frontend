import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { getTranslationObject } from "../../../i18next";

const useCampaignDocument = (id) => {
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;

  const translate = getTranslationObject("dashboard");
  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;

  const { refetch, data: document = [] } = useQuery({
    queryKey: ["document"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=document&campaign_id=${id}`
      );
      return res.data.data;
    },
  });

  const handleDocumentDelete = (id) => {
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
          .delete("/api/campaigns/asset", { data })
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

  return [document, handleDocumentDelete];
};

export default useCampaignDocument;
