import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useReview = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`/reviews`).then((res) => {
      setReviews(res.data);
      //   console.log("review:", res.data);
    });
  }, []);
  return reviews;
};

export default useReview;
