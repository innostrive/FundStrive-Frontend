import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getTranslationObject } from "../../../i18next";

const useCampaignData = () => {
  const axiosSecure = useAxiosSecure();

  const translate = getTranslationObject("dashboard");
  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;

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
          .delete("/api/campaigns", { data })
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

  return [campaigns, handleCampaignDelete];
};

export default useCampaignData;
