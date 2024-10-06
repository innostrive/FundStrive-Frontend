import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
const RecentBlog = ({ blog }) => {
  return (
    <div className="flex gap-4 border-b border-gray-400 p-5">
      <img src={donate} alt="" className="h-16 w-16 rounded-md" />
      <Link to={`/recent-blog-details/${blog?._id}`}>
        <li className="text-base font-normal tracking-normal text-secondary list-none hover:underline">
          {blog?.title}
        </li>
      </Link>
    </div>
  );
};

export default RecentBlog;
