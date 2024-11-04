import { useEffect, useState } from "react";
import BlogDetailsInfo from "../../components/Blogs/BlogDetailsInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useReviewData from "../../hooks/useReviewData";

const BlogDetailsData = () => {
  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState({});
  const [author, setAuthor] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/posts/${id}`).then((res) => {
      const blogData = res.data.data;
      setBlogInfo(blogData);
      console.log("blogData:", blogData);
    });
  }, [id, axiosSecure]);

  const authorId = blogInfo?.created_by;

  useEffect(() => {
    axiosSecure.get(`/api/users/${authorId}`).then((res) => {
      const userData = res.data.data;
      setAuthor(userData);
    });
  }, [authorId, axiosSecure]);

  const [reviews, refetch] = useReviewData();
  const URL = import.meta.env.VITE_BASE_URL;
  console.log("reviews:", reviews);

  const blogReviews = reviews.filter((item) => item.post_id === id);
  console.log("blogReviews:", blogReviews);

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
    <BlogDetailsInfo
      blogInfo={blogInfo}
      author={author}
      blogReviews={blogReviews}
    ></BlogDetailsInfo>
  );
};

export default BlogDetailsData;
