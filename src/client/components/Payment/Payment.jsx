import { loadStripe } from "@stripe/stripe-js";
import { Input, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getTranslationObject } from "../../../../i18next";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = ({ id }) => {
  const URL = import.meta.env.VITE_BASE_URL;
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
    try {
      const response = await axios.post(`${URL}/payment_check`, payload);
      const sessionId = response.data.data.sessionId;
      if (sessionId) {
        const stripe = await stripePromise;
        localStorage.setItem("planData", JSON.stringify(payload));
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {}
  };
  const translation = getTranslationObject("public");
  const { amount, email, makeYourDonation, amountError, emailError } =
    translation?.campaign;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">{email}</label>
        <Input
          size="md"
          placeholder={email}
          className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          {...register("email", {
            required: emailError,
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
          {amount}
        </label>
        <Input
          size="md"
          placeholder={amount}
          className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          {...register("amount", { required: amountError })}
        />
        {errors.amount && (
          <Typography color="red" variant="small">
            {errors.amount.message}
          </Typography>
        )}
      </div>
      <IButton className="uppercase w-full" type="submit">
        {makeYourDonation}
      </IButton>
    </form>
  );
};

export default Payment;
