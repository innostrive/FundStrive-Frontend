import useReview from "../../hooks/useReview";
import axios from "axios";
import { toast } from "react-toastify";
import ReviewCard from "./ReviewCard";
const VisitorReview = () => {
  const [reviews, refetch] = useReview();
  console.log("review:", reviews);
  const URL = import.meta.env.VITE_BASE_URL;
  const handleDelete = async (id) => {
    console.log("id:", id);
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
      {reviews.map((review) => (
        <ReviewCard review={review} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default VisitorReview;
