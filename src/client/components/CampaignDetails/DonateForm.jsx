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
const DonateForm = () => {
  // const { countries } = useCountries();
  // const [country, setCountry] = useState(0);
  // const { name, flags, countryCallingCode } = countries[country];
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        // setSelectedCountry(data?.userSelectValue?.label);
      });
  }, []);
  console.log("countrydata:", selectedCountry);
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentType, setPaymentType] = useState(false);
  // console.log(paymentType);
  return (
    <Card color="transparent" shadow={false} className="my-10">
      <h1 className="text-base font-medium text-black">Payment With</h1>
      <div className="flex">
        <Radio
          name="offline"
          label="Offline"
          onClick={() => setPaymentType(true)}
        />
        <Radio
          name="offline"
          label="Online"
          defaultChecked
          onClick={() => setPaymentType(false)}
        />
      </div>
      {paymentType ? (
        <form className="mt-8 mb-2 w-full">
          <div className="space-y-4">
            <h1 className="text-base font-medium text-black">
              Donation Amount
            </h1>
            <Input
              size="md"
              className="bg-[#f3f4f7]"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              disabled={
                donationAmount === "100" ||
                donationAmount === "200" ||
                donationAmount === "300"
              }
            />
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
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 font-normal text-base"
              >
                Country
              </Typography>
              <Select
                label="Select Country"
                // value={selectedCountry}
                onChange={(value) => setSelectedCountry(value)}
              >
                {countries.map((country) => (
                  <Option key={country.value} value={country.label}>
                    {country.label}
                  </Option>
                ))}
              </Select>
            </div>
            <Button className="mt-6 bg-secondary" fullWidth>
              Make Your Donation
            </Button>
          </div>
        </form>
      ) : (
        <Payment />
      )}
    </Card>
  );
};

export default DonateForm;
