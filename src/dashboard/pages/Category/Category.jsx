import { Link } from "react-router-dom";
import Categories from "./Categories";
import { Button } from "@material-tailwind/react";
import DashboardLayout from "../../layout/DashboardLayout";

const Category = () => {
  return (
    <DashboardLayout>
      <Categories></Categories>
    </DashboardLayout>
  );
};

export default Category;
