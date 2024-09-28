import donate from "../../assets/donate-1.jpg";
const RecentBlog = ({ post }) => {
  return (
    <div className="flex gap-4 border-b border-gray-400 p-5">
      <img src={donate} alt="" className="h-16 w-16 rounded-md" />
      <h1 className="text-base font-normal tracking-normal text-secondary">
        {post?.title}
      </h1>
    </div>
  );
};

export default RecentBlog;
