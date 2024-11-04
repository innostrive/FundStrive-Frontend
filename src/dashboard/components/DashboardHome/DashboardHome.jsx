import FormCard from "../../ui/FormCard";
import Chart from "../Chart/Chart";
import DashboardCard from "../DashboardCard/DashboardCard";

const DashboardHome = () => {
  return (
    <section className="space-y-5">
      <FormCard>
        <DashboardCard />
      </FormCard>
      <FormCard>
        <Chart />
      </FormCard>
    </section>
  );
};

export default DashboardHome;
