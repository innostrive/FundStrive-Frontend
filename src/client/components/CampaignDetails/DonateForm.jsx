import {
  Button,
  Card,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Payment from "../Payment/Payment";
import { useCountries } from "use-react-countries";
import { useForm } from "react-hook-form";
import CustomDonateForm from "./CustomDonateForm";
import axios from "axios";
import { toast } from "react-toastify";
import { getTranslationObject } from "../../../../i18next";
const DonateForm = ({ id }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [value, setValue] = useState();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [donationAmount, setDonationAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(true);
  const [paymentType, setPaymentType] = useState(false);
  const [error, setError] = useState("");
  const translation = getTranslationObject("public");
  const {
    offline,
    online,
    paymentWith,
    donationAmount: donationAmountT,
    custom,
    personalInfromation,
    name,
    email,
    bankOrTransectionId,
    country,
    makeYourDonation,
    hundredDollar,
    twoHundredDollar,
    threeHundredDollar,
    selectCountry,
    bankError,
    nameError,
    emailError,
    paymetSuccess,
  } = translation?.campaign;
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
    if (!donationAmount) {
      setError("Donation amount is required");
    } else {
      setError(""); // Clear error if validation passes
      // Proceed with form submission logic
    }
    const payload = {
      ...data,
      country: selectedCountry,
      amount: donationAmount,
      campaign_id: id,
      mode: "offline",
    };

    try {
      await axios.post(`${URL}/payment_success`, payload).then((res) => {
        if (res.status) {
          toast.success(paymetSuccess);
          reset();
        }
      });
    } catch (error) {}
  };

  return (
    <Card color="transparent" shadow={false} className="my-10">
      <h1 className="text-base font-medium text-black">{paymentWith}</h1>
      <div className="flex">
        <Radio
          name="offline"
          label={offline}
          onClick={() => setPaymentType(true)}
        />
        <Radio
          name="offline"
          label={online}
          defaultChecked
          onClick={() => setPaymentType(false)}
        />
      </div>
      {paymentType ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="space-y-4">
            <h1 className="text-base font-medium text-black">
              {donationAmountT}
            </h1>
            <Input
              size="md"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              disabled={!isCustomAmount} // Disable only when custom is not selected
            />

            <div className="flex flex-wrap">
              <Radio
                name="type"
                label={hundredDollar}
                onClick={() => {
                  setDonationAmount("100");
                  setIsCustomAmount(false);
                }}
              />
              <Radio
                name="type"
                label={twoHundredDollar}
                onClick={() => {
                  setDonationAmount("200");
                  setIsCustomAmount(false);
                }}
              />
              <Radio
                name="type"
                label={threeHundredDollar}
                onClick={() => {
                  setDonationAmount("300");
                  setIsCustomAmount(false);
                }}
              />
              <Radio
                name="type"
                label={custom}
                onClick={() => {
                  setDonationAmount("");
                  setIsCustomAmount(true); // Enable input when Custom is selected
                }}
                defaultChecked
              />
            </div>
            <div className="my-4">
              <h1 className="text-base font-medium text-black">
                {personalInfromation}
              </h1>
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 font-normal text-base"
              >
                {name}
              </Typography>
              <Input
                size="md"
                placeholder={name}
                className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("name", { required: nameError })}
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
                {email}
              </Typography>
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
                {bankOrTransectionId}
              </Typography>
              <Input
                size="md"
                placeholder={bankOrTransectionId}
                className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("transaction_id", {
                  required: bankError,
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
                {country}
              </Typography>
              <Select
                label={selectCountry}
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
              {makeYourDonation}
            </Button>
          </div>
        </form>
      ) : (
        <Payment id={id} />
      )}
      {/* <CustomDonateForm /> */}
    </Card>
  );
};

export default DonateForm;
