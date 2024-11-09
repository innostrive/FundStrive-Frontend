import {
  Button,
  Card,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCountries } from "use-react-countries";
import { getTranslationObject } from "../../../../i18next";

const ContactForm = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const translation = getTranslationObject("public");
  const {
    name: nameT,
    nameError,
    email,
    emailError,
    phone,
    message,
    messageError,
    sendMessage,
    sending,
  } = translation?.contact;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      phone: countryCallingCode + " " + data.phone,
    };
    setIsLoading(true);
    axios.post(`${baseUrl}/contact-us`, payload).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        toast.success("Thanks for contact with us...");
        reset();
      } else {
        toast.warning("Something wrong!");
      }
    });
  };
  return (
    <div>
      <Card color="transparent" shadow={false}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-2 w-full max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {nameT}
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder={name}
              className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("name", { required: nameError })}
            />
            {errors.name && (
              <Typography color="red" variant="small" className="-my-3">
                {errors.name.message}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {email}
            </Typography>
            <Input
              size="lg"
              type="email"
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
              <Typography color="red" variant="small" className="-my-3">
                {errors.email.message}
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {phone}
            </Typography>
            <div className="relative flex w-full max-w-[24rem]">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    {countryCallingCode}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {countries.map(
                    ({ name, flags, countryCallingCode }, index) => {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name}{" "}
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      );
                    }
                  )}
                </MenuList>
              </Menu>
              <Input
                type="tel"
                placeholder={phone}
                className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
                {...register("phone")}
              />
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {message}
            </Typography>
            <div className="w-96">
              <Textarea
                label="Message"
                className="!border !border-gray-300 px-2 py-1.5 w-auto !focus:outline-gray-300 !focus:outline-1 !rounded"
                labelProps={{
                  className: "before:content-none after:content-none px-4 py-2",
                }}
                {...register("message", { required: messageError })}
              />
            </div>
            {errors.message && (
              <Typography color="red" variant="small" className="-my-3">
                {errors.message.message}
              </Typography>
            )}
          </div>

          <Button
            type="submit"
            className="mt-6 uppercase bg-secondary"
            fullWidth
            disabled={isLoading && true}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <Spinner /> {sending}
              </div>
            ) : (
              sendMessage
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
