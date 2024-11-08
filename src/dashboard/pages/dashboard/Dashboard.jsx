import { getTranslationObject } from "../../../../i18next";
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  const dashboardTranslations = getTranslationObject("dashboard");
  const { dashboard } = dashboardTranslations.dashboardTitle;
  return (
    <DashboardLayout>
      <h1 className="text-lg font-medium my-5">{dashboard}</h1>
      <DashboardHome />
    </DashboardLayout>
  );
};

export default Dashboard;
