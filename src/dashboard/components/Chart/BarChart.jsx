import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import useAxiosSecure from "../../../client/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const BarChart = () => {
  // const [series, levels] = useDashboardCampaignData();
  const axiosSecure = useAxiosSecure();
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosSecure
      .get("/api/dashboard/get-month-wise-campaign-data")
      .then((res) => {
        console.log("res:", res.data.data);
        setSeries(res.data.data.series);
        setCategories(res.data.data.categories);
      });
  }, []);
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Campaign",
        data: series,
      },
    ],
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
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: categories,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
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
        <div className="w-max rounded-lg bg-[#8BC34A] p-5 text-white"></div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Month Wise Donation Raised
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
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default BarChart;
