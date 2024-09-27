import { Link } from "react-router-dom";
import Categories from "./Categories";
import { Button } from "@material-tailwind/react";

const Category = () => {
  return (
    <div className="border border-b border-gray-200 rounded-md p-5">
      <div className="flex justify-between py-5">
        <h1 className="text-lg font-medium">Category List</h1>
        <Link to="/dashboard/create-category">
          <Button className="bg-[#2B2A27] ">Create New Category</Button>
        </Link>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Category;
