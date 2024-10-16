import moment from "moment";
import { Link } from "react-router-dom";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import BlogReview from "./BlogReview";

const BlogDetailsInfo = ({ blogInfo, author, blogReviews }) => {
  return (
    <FormCard title="Blog Details">
      <div className="flex ml-auto p-2 bg-red-200 rounded-md w-10">
        <Link to={`/dashboard/edit-blog/${blogInfo?._id}`}>
          {" "}
          <Edit className="size-6 text-white" />
        </Link>
      </div>
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
        <span>Total Comments {blogReviews.length}</span>
        {blogReviews.map((review) => (
          <BlogReview review={review} />
        ))}
      </div>
    </FormCard>
  );
};

export default BlogDetailsInfo;
