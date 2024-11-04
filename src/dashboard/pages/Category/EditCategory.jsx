import { Breadcrumbs } from "@material-tailwind/react";
import EditCategoryInfo from "../../components/CategoryInfo/EditCategoryInfo";
import { NavLink } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";

const EditCategory = () => {
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/categories" className="opacity-60">
          Categories
        </NavLink>
        <span className="cursor-context-menu">Update Category</span>
      </Breadcrumbs>{" "}
      <EditCategoryInfo />
    </DashboardLayout>
  );
};

export default EditCategory;
