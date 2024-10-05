import ReviewForm from "./ReviewForm";
import VisitorReview from "./VisitorReview";

const Reviews = ({ campaignId }) => {
  return (
    <section className="space-y-10">
      <VisitorReview></VisitorReview>
      <ReviewForm campaignId={campaignId}></ReviewForm>
    </section>
  );
};

export default Reviews;
