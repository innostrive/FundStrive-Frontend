import ReviewBlogInfo from "./ReviewBlogInfo";
const BlogReviewCard = ({ blogReviews }) => {
  return (
    <div className="space-y-5">
      <span className="text-lg font-medium tracking-normal leading-normal text-secondary">
        Total Comments {blogReviews?.length}
      </span>
      {blogReviews.map((review) => (
        <ReviewBlogInfo key={review?._id} review={review} />
      ))}
    </div>
  );
};

export default BlogReviewCard;
