import DashboardHome from "../../components/DashboardHome/DashboardHome";
import DashboardLayout from "../../layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-lg font-medium my-5">Dashboard</h1>
      <DashboardHome />
    </DashboardLayout>
  );
};

export default Dashboard;
