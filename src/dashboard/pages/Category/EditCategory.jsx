import { Breadcrumbs } from "@material-tailwind/react";
import EditCategoryInfo from "../../components/CategoryInfo/EditCategoryInfo";
import { NavLink } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const EditCategory = () => {
  const dashboardTranslations = getTranslationObject("dashboard");
  const { categoryInformation, category, updateCategory, updateBtn } =
    dashboardTranslations.dashboardTitle;
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/categories" className="opacity-60">
          {category}
        </NavLink>
        <span className="cursor-context-menu">{updateCategory}</span>
      </Breadcrumbs>{" "}
      <EditCategoryInfo updateCategory={updateCategory} updateBtn={updateBtn} />
    </DashboardLayout>
  );
};

export default EditCategory;
