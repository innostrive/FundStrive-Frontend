import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaRankingStar, FaStar } from "react-icons/fa6";

const ShowRating = ({ rating, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="size-5 text-yellow-900" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="size-5 text-yellow-900" />
        ) : (
          <FaRegStar className="size-5 text-yellow-900" />
        )}
      </span>
    );
  });
  return <div className="flex gap-2">{ratingStar}</div>;
};

export default ShowRating;
