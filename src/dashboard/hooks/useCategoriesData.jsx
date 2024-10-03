import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useCategoriesData = () => {
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosSecure.get("/categories").then((res) => {
      setCategories(res.data.data.categories);
    });
  }, []);

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
              const remainingCategories = categories.filter(
                (category) => category._id !== id
              );
              setCategories(remainingCategories);
              toast.success("Delete Successful");
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

  return { categories, handleCategoryDelete, setCategories };
};

export default useCategoriesData;
