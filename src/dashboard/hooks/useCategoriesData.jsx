import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCategoriesData = () => {
  const axiosSecure = useAxiosSecure();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosSecure.get("/categories").then((res) => {
      setCategories(res.data.data.categories);
    });
  }, []);
  return categories;
};

export default useCategoriesData;
