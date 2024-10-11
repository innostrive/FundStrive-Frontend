import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const useCategoriesData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/categories");
      return res.data.data.categories;
    },
  });

  const handleCategoryDelete = (id) => {
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
          .delete("/api/categories", { data })
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

  return [categories, handleCategoryDelete];
};

export default useCategoriesData;
