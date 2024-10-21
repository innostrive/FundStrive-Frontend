import { loadStripe } from "@stripe/stripe-js";
import { Input, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import axios from "axios";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = ({ id }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [payment, setPayment] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      campaign_id: id,
    };
    console.log("payment:", payload);
    try {
      const response = await axios.post(`${URL}/payment_check`, payload);
      const sessionId = response.data.data.sessionId;
      console.log("response:", response);
      if (sessionId) {
        const stripe = await stripePromise;
        localStorage.setItem("planData", JSON.stringify(payload));
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">Email</label>
        <Input
          size="md"
          placeholder="Email"
          className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <label className="text-base font-medium text-[#2B2A27] block mt-3">
          Amount
        </label>
        <Input
          size="md"
          placeholder="Amount"
          className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          {...register("amount", { required: "Amount is required" })}
        />
        {errors.amount && (
          <Typography color="red" variant="small">
            {errors.amount.message}
          </Typography>
        )}
      </div>
      <IButton className="uppercase w-full" type="submit">
        Make your donation
      </IButton>
    </form>
  );
};

export default Payment;
