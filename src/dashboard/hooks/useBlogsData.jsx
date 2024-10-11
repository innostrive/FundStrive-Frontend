import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const useBlogsData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data.data.posts;
    },
  });

  const handleBlogDelete = (id) => {
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
          .delete("/api/posts", { data })
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
  return [blogs, handleBlogDelete];
};

export default useBlogsData;
