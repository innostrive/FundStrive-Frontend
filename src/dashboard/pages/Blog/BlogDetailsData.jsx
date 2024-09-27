import { useEffect, useState } from "react";
import BlogDetailsInfo from "../../components/Blogs/BlogDetailsInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

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
  return (
    <BlogDetailsInfo blogInfo={blogInfo} author={author}></BlogDetailsInfo>
  );
};

export default BlogDetailsData;
