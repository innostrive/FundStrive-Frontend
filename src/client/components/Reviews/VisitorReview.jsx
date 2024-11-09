import useReview from "../../hooks/useReview";
import axios from "axios";
import { toast } from "react-toastify";
import ReviewCard from "./ReviewCard";
import { getTranslationObject } from "../../../../i18next";
const VisitorReview = ({ campaignId }) => {
  const [reviews, refetch] = useReview();
  const URL = import.meta.env.VITE_BASE_URL;
  const translation = getTranslationObject("public");
  const { totalComments } = translation?.campaign;
  const campaignReviews = reviews.filter(
    (item) => item?.campaign_id === campaignId
  );

  const handleDelete = async (id) => {
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
    <div className="space-y-5">
      <span className="text-lg font-medium tracking-normal leading-normal text-secondary">
        {totalComments} {campaignReviews.length}
      </span>
      {campaignReviews?.map((review) => (
        <ReviewCard
          key={review?._id}
          review={review}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default VisitorReview;
