import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Chart = () => {
  return (
    <div className="flex gap-5 border border-b border-gray-200 rounded-md p-5">
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Chart;
