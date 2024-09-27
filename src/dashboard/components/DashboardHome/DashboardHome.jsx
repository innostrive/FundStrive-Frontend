import Chart from "../Chart/Chart";
import DashboardCard from "../DashboardCard/DashboardCard";

const DashboardHome = () => {
  return (
    <section className="space-y-5">
      <DashboardCard />
      <Chart />
    </section>
  );
};

export default DashboardHome;
