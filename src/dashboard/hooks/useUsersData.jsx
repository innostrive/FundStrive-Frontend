import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useUsersData = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosSecure.get("/api/users").then((res) => {
      setUsers(res.data.data.users);
    });
  }, []);

  const handleUserDelete = (id) => {
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
              const remainingCategories = users.filter(
                (user) => user._id !== id
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

  return { users, setUsers, handleUserDelete };
};

export default useUsersData;
