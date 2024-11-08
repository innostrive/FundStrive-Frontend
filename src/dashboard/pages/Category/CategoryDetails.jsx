import { NavLink, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CampaignInfo from "../../components/CampaignInfo/CampaignInfo";
import CategoryInfo from "../../components/CategoryInfo/CategoryInfo";
import { Breadcrumbs } from "@material-tailwind/react";
import DashboardLayout from "../../layout/DashboardLayout";
import { getTranslationObject } from "../../../../i18next";

const CategoryDetails = () => {
  const { id } = useParams();
  const [categoryInfo, setCategoryInfo] = useState({});
  const [blogContent, setBlogContent] = useState("");
  const axiosSecure = useAxiosSecure();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { categoryInformation, category } =
    dashboardTranslations.dashboardTitle;
  useEffect(() => {
    axiosSecure.get(`/categories/${id}`).then((res) => {
      setCategoryInfo(res.data.data);
      setBlogContent(res.data.data.description);
    });
  }, []);
  return (
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/categories" className="opacity-60">
          {category}
        </NavLink>
        <span className="cursor-context-menu">{categoryInformation}</span>
      </Breadcrumbs>
      <CategoryInfo
        categoryInfo={categoryInfo}
        blogContent={blogContent}
        setBlogContent={setBlogContent}
        categoryInformation={categoryInformation}
      />
    </DashboardLayout>
  );
};

export default CategoryDetails;
