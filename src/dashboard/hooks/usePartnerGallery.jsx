import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { getTranslationObject } from "../../../i18next";

const usePartnerGallery = () => {
  const axiosSecure = useAxiosSecure();

  const translate = getTranslationObject("dashboard");
  const { deleteSuccess, deletePermission, permissionSuccess, warning, error } =
    translate.form;

  const { refetch, data: partner = [] } = useQuery({
    queryKey: ["partner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners?slug=PARTNER");
      return res.data.data.banners;
    },
  });

  const handlePartnerDelete = (id) => {
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
          .delete("/api/banners", { data })
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

  return [partner, handlePartnerDelete];
};

export default usePartnerGallery;
