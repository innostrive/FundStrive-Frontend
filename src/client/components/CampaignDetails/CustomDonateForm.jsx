import {
  Button,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const CustomDonateForm = () => {
  const [value, setValue] = useState();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentType, setPaymentType] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data?.userSelectValue?.label);
      });
  }, []);
  // console.log("countrydata:", selectedCountry);

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      country: selectedCountry,
    };

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

    console.log("data:", payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
      <div className="space-y-4">
        <h1 className="text-base font-medium text-black">Donation Amount</h1>
        <Input
          size="md"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          disabled={
            donationAmount === "100" ||
            donationAmount === "200" ||
            donationAmount === "300"
          }
          {...register("amount", { required: "Amount is required" })}
        />
        {/* {errors.amount && (
      <Typography color="red" variant="small">
        {errors.amount.message}
      </Typography>
    )} */}
        <div className="flex flex-wrap">
          <Radio
            name="type"
            label="$100"
            onClick={() => setDonationAmount("100")}
          />
          <Radio
            name="type"
            label="$200"
            onClick={() => setDonationAmount("200")}
          />
          <Radio
            name="type"
            label="$300"
            onClick={() => setDonationAmount("300")}
          />
          <Radio
            name="type"
            label="Custom"
            onClick={() => setDonationAmount("")}
            defaultChecked
          />
        </div>
        <div className="my-4">
          <h1 className="text-base font-medium text-black">
            Personal Information
          </h1>
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-normal text-base"
          >
            Your Name
          </Typography>
          <Input
            size="md"
            placeholder="name"
            className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <Typography color="red" variant="small">
              {errors.name.message}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-normal text-base"
          >
            Your Email
          </Typography>
          <Input
            size="md"
            placeholder="email"
            className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <Typography color="red" variant="small">
              {errors.email.message}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-normal text-base"
          >
            Bank AC/Transection Id
          </Typography>
          <Input
            size="md"
            placeholder="Bank Account Number"
            className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("transaction_id", {
              required: "Bank Account/Transection Id is required",
            })}
          />
          {errors.transaction_id && (
            <Typography color="red" variant="small">
              {errors.transaction_id.message}
            </Typography>
          )}
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 font-normal text-base"
          >
            Country
          </Typography>
          <Select
            label="Select Country"
            value={selectedCountry}
            onChange={(value) => setSelectedCountry(value)}
          >
            {countries.map((country) => (
              <Option
                key={country.value}
                value={country.label}
                onClick={() => setValue(selectedCountry)}
              >
                {country.label}
              </Option>
            ))}
          </Select>
        </div>
        <Button type="submit" className="mt-6 bg-secondary" fullWidth>
          Make Your Donation
        </Button>
      </div>
    </form>
  );
};

export default CustomDonateForm;
