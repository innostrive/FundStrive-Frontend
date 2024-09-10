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
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">
          Card Number
        </label>
        <CardNumberElement className="border border-gray-400 rounded px-3 py-3" />
      </div>
      <div className="flex gap-4">
        <div className="space-y-4 w-full">
          <label className="text-base font-medium text-[#2B2A27]">
            Card Expier Date
          </label>
          <CardExpiryElement className="border border-gray-400 rounded px-3 py-3" />
        </div>
        <div className="space-y-4 w-full">
          <label className="text-base font-medium text-[#2B2A27]">
            Card CVC
          </label>
          <CardCvcElement className="border border-gray-400 rounded px-3 py-3" />
        </div>
      </div>
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">
          Your Name
        </label>
        <Input
          size="md"
          placeholder="name"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <div className="space-y-4">
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
      </div>
      <div className="space-y-4">
        <label className="text-base font-medium text-[#2B2A27]">
          Your Country
        </label>
        <Input
          size="md"
          placeholder="email"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      {/* <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      /> */}
      <Button className="uppercase w-full" type="submit" disabled={!stripe}>
        Make your donation
      </Button>
    </form>
  );
};

export default CheckoutForm;
