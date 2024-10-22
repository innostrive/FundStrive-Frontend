import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useLogo = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: logo = [] } = useQuery({
    queryKey: ["siteLogo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banners?slug=Logo");
      return res.data.data.banners;
    },
  });

  const handleLogoDelete = (id) => {
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
              toast.warning("Logo image not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  return [logo, handleLogoDelete];
};

export default useLogo;
