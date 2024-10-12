import { loadStripe } from "@stripe/stripe-js";
import { Input } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import axios from "axios";
import { useState } from "react";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [payment, setPayment] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const price = {
      price: payment,
      api_id: "price_1Q6zN3JggWefJ04AWu8mZIig",
    };
    try {
      const response = await axios.post(`${URL}/payment_check`, price);
      const sessionId = response.data.data.sessionId;

      if (sessionId) {
        const stripe = await stripePromise;
        localStorage.setItem("planData", JSON.stringify(price));
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">Amount</label>
        <Input
          size="md"
          placeholder="Amount"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          onChange={(e) => setPayment(e.target.value)}
        />
      </div>
      <IButton className="uppercase w-full" type="submit">
        Make your donation
      </IButton>
    </form>
  );
};

export default Payment;
