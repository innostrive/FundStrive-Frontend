import { Button, Input, Typography } from "@material-tailwind/react";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async (item) => {
    const data = {
      ...item,
      price: 65,
    };
    console.log("item:", data);
    try {
      const response = await axiosInstance.post("/payment_check", item);
      const sessionId = response.data.sessionId;

      if (sessionId) {
        // swalSuccess();
        const stripe = await stripePromise;
        console.log(stripe);
        localStorage.setItem("planData", JSON.stringify(item));
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      swalError(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">
          Your Email
        </label>
        <Input
          size="md"
          placeholder="email"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div> */}
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">Amount</label>
        <Input
          size="md"
          placeholder="Amount"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button
        className="uppercase w-full bg-secondary"
        onClick={() => handleSubmit(item)}
      >
        Make your donation
      </Button>
    </form>
  );
};

export default CheckoutForm;
