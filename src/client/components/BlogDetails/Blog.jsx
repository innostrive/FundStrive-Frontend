import donate from "../../assets/donate-1.jpg";
const Blog = ({ blog }) => {
  return (
    <div>
      <div className="space-y-8">
        {/* <img src={donate} alt="" className="h-52 w-full object-cover" /> */}
        <div
          className="text-sm font-normal leading-normal tracking-wide"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        ></div>
      </div>
    </div>
  );
};

export default Blog;
