import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
const PaymentSuccess = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isHover, setIsHover] = useState(false);
  const [paymentInfo] = useSearchParams();
  const { email, amount, campaign_id } = {
    email: paymentInfo.get("email"),
    amount: paymentInfo.get("amount"),
    campaign_id: paymentInfo.get("campaign_id"),
  };

  const payload = {
    email,
    amount,
    campaign_id,
  };
  axios.post(`${URL}/payment_success`, payload).then((res) => {
    if (res.status === 200) {
      console.log(res.data.message);
    }
  });

  return (
    <section className="relative h-screen bg-[#f2f2f2]">
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-none h-96 w-[500px]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <CardHeader
            shadow={false}
            floated={false}
            className="flex justify-center"
          >
            <div className="rounded-full h-12 w-12 bg-green-500 text-white flex justify-center items-center">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                ></path>
              </svg>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col justify-center items-center space-y-10">
            <div>
              <h1 className="text-3xl font-bold tracking-normal text-secondary text-center">
                Payment Successful
              </h1>
            </div>
            <Link to="/" className="relative overflow-clip w-2/4">
              <button
                className="flex items-center justify-center p-4 bg-secondary uppercase rounded-sm"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <motion.div
                  className="h-1 w-1 absolute bg-none left-5"
                  animate={{
                    scale: isHover ? 110 : 1,
                    backgroundColor: isHover ? "#4CAF50" : "",
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 0.2,
                  }}
                ></motion.div>
                <motion.div className="z-[999]">
                  <p className=" text-white">Back To Home</p>
                </motion.div>
              </button>
            </Link>
          </CardBody>
        </div>
      </Card>
    </section>
  );
};

export default PaymentSuccess;
