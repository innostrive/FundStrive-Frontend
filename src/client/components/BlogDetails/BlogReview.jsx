import axios from "axios";
import useReview from "../../hooks/useReview";
import BlogReviewForm from "./BlogReviewForm";
import { toast } from "react-toastify";
import BlogReviewCard from "./BlogReviewCard";
import { useEffect, useState } from "react";

const BlogReview = ({ blog }) => {
  const [reviews, refetch] = useReview();
  const URL = import.meta.env.VITE_BASE_URL;

  const [blogReviews, setBlogReviews] = useState([]);

  useEffect(() => {
    if (reviews && blog?._id) {
      const filteredReviews = reviews.filter(
        (item) => item?.post_id === blog?._id
      );
      setBlogReviews(filteredReviews);
    }
  }, [blog?._id]);

  const handleDelete = async (id) => {
    console.log("id:", id);
    const data = {
      ids: [id],
    };
    await axios.delete(`${URL}/reviews`, { data }).then((res) => {
      if (res.status === 200) {
        toast.success("Comment deleted...");
        refetch();
      }
    });
  };
  return (
    <section className="space-y-5">
      <BlogReviewCard blogReviews={blogReviews} handleDelete={handleDelete} />
      <BlogReviewForm blog={blog} refetch={refetch} />
    </section>
  );
};

export default BlogReview;
