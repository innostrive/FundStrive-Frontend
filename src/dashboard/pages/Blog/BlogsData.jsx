import Blogs from "../../components/Blogs/Blogs";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";

const BlogsData = () => {
  return (
    <DashboardLayout>
      <Blogs></Blogs>
    </DashboardLayout>
  );
};

export default BlogsData;
