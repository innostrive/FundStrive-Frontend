import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const axiosSecure = useAxiosSecure();
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosSecure.get("/api/dashboard/get-month-wise-raised-data").then((res) => {
      console.log("res:", res.data.data);
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
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Pie Chart
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize your data in a simple way using the FundStrive.
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
