import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useContactInfo = () => {
  const axiosSecure = useAxiosSecure();
  const URL = import.meta.env.VITE_BASE_URL;
  const { refetch, data: contactInfo = [] } = useQuery({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/contact-us`);
      console.log("contactInfo:", res.data.data);
      return res.data.data.contactUs;
    },
  });

  const handleContactInfoDelete = (id) => {
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
          .delete("/api/contact-us", { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
              refetch();
            } else {
              toast.warning("Contact Info is not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  return [contactInfo, handleContactInfoDelete];
};

export default useContactInfo;
