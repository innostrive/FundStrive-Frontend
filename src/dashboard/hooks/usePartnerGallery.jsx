import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const usePartnerGallery = () => {
  const axiosSecure = useAxiosSecure();
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
              toast.warning("Partner image not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  return [partner, handlePartnerDelete];
};

export default usePartnerGallery;
