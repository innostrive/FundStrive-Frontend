import React, { useState } from "react";

const StarRating = ({
  maxStars = 5,
  rating,
  hoverRating,
  setRating,
  setHoverRating,
}) => {
  const handleMouseMove = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const isHalf = mouseX < width / 2;
    setHoverRating(isHalf ? index + 0.5 : index + 1);
  };

  const handleClick = () => {
    setRating(hoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(rating);
  };

  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, index)}
          onClick={() => handleClick(index)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Full Star */}
          <StarIcon
            className={`w-8 h-8 ${
              hoverRating > index ? "text-yellow-400" : "text-gray-300"
            }`}
          />

          {/* Half Star Overlay */}
          {hoverRating === index + 0.5 && (
            <HalfStarIcon className="absolute top-0 left-0 w-8 h-8 text-yellow-400" />
          )}
        </div>
      ))}
    </div>
  );
};
// Full star SVG icon
const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.429L23 9.588l-5.832 5.696 1.375 8.022L12 18.275 5.457 23.306l1.375-8.022L1 9.588l7.332-1.572L12 .587z" />
  </svg>
);

// Half star SVG icon
const HalfStarIcon = ({ className }) => (
  <svg className={className} fill="#FABC3F" viewBox="0 0 24 24">
    <path d="M12 17.27l-6.18 3.73 1.64-7.19L1.82 9.5l7.27-.61L12 2.5V17.27z" />
  </svg>
);
export default StarRating;
