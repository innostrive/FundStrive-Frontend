import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FaChartPie } from "react-icons/fa";
const PieChart = () => {
  const axiosSecure = useAxiosSecure();
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosSecure.get("/api/dashboard/get-month-wise-raised-data").then((res) => {
      setSeries(res.data.data.series);
      setCategories(res.data.data.categories);
    });
  }, []);

  const chartConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: series,
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-orange-700 p-5 text-white">
          <FaChartPie className="h-5 w-5" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Category Wise Campaigns
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize campaign data of the FundStrive.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default PieChart;
