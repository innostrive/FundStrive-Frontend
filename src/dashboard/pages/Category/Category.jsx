import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Categories from "./Categories";
import { Button } from "@material-tailwind/react";

const Category = () => {
  return (
    <Layout>
      <div className="flex justify-between py-5">
        <h1>Category List</h1>
        <Link to="/dashboard/create-category">
          <Button>Create New Category</Button>
        </Link>
      </div>
      <Categories></Categories>
    </Layout>
  );
};

export default Category;
