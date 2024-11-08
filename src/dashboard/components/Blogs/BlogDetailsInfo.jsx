import moment from "moment";
import FormCard from "../../ui/FormCard";
import BlogReview from "./BlogReview";
import DashboardLayout from "../../layout/DashboardLayout";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const BlogDetailsInfo = ({ blogInfo, author, blogReviews }) => {
  const dashboardTranslations = getTranslationObject("dashboard");
  const { blogs, blogDetails, totalComments } = dashboardTranslations.blog;
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/blogs" className="opacity-60">
          {blogs}
        </NavLink>
        <span className="cursor-context-menu">{blogDetails}</span>
      </Breadcrumbs>
      <FormCard title={blogDetails}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-black">Author:</span>
            <p className="text-base font-normal text-black">{author?.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-medium text-black">
              Published At:
            </span>
            <p className="text-base font-normal text-black">
              {moment(blogInfo?.created_at).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <div
            className="p-2 rounded-md text-base font-normal text-black"
            dangerouslySetInnerHTML={{ __html: blogInfo?.content }}
          ></div>
        </div>
        <div className="space-y-5 my-10">
          <span>
            {totalComments}: {blogReviews.length}
          </span>
          {blogReviews.map((review, i) => (
            <BlogReview review={review} key={i} />
          ))}
        </div>
      </FormCard>
    </DashboardLayout>
  );
};

export default BlogDetailsInfo;
