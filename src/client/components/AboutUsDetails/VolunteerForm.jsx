import React, { useState } from "react";
import { Dialog, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import FormCard from "../../../dashboard/ui/FormCard";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { X } from "../../assets/icons/icons";
import { getTranslationObject } from "../../../../i18next";

export function VolunteerForm({ open, handleOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const password = "123456";
    const volunteerData = {
      ...data,
      password,
      role: "volunteer",
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/signup",
        volunteerData
      );
      if (response.status === 200) {
        setIsLoading(false);
        reset();
        toast.success("Congratulation to join as a volunteer");
      }
    } catch (error) {
      toast.error("Failed to Join. Please try again.");
    }
  };
  const translation = getTranslationObject("public");
  const {
    name,
    nameError,
    email,
    emailError,
    emailFormat,
    address,
    addressError,
    phoneNumber,
    phoneNumberError,
    country,
    countryError,
    city,
    cityError,
    state,
    stateError,
    postCode,
    postCodeError,
    postCodeFormat,
    join,
    joining,
  } = translation?.signUp;
  return (
    <>
      <IButton
        className="bg-primary hover:bg-gray-200 hover:text-primary duration-200 ease-in text-text-primary rounded-none uppercase"
        onClick={handleOpen}
      >
        Join Us
      </IButton>
      <Dialog size="md" open={open} handler={handleOpen}>
        <FormCard
          className="bg-[#F9F7F7]"
          title="Join as a volunteer"
          icon={<X onClick={handleOpen} />}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
            <div className="mb-1 grid sm:grid-cols-2 grid-cols-1  gap-5">
              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {name}
                </Typography>
                <input
                  placeholder="Name"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("name", { required: nameError })}
                  error={errors.name?.message}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {email}
                </Typography>
                <input
                  placeholder="example@mail.com"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: emailError,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: emailFormat,
                    },
                  })}
                  error={errors.email?.message}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {phoneNumber}
                </Typography>
                <input
                  placeholder="Phone number"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.phone_number ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("phone_number", {
                    required: phoneNumberError,
                  })}
                  error={errors.phone_number?.message}
                />
                {errors.phone_number && (
                  <p className="text-red-500">{errors.phone_number.message}</p>
                )}
              </div>

              {/* Add other fields in a similar way */}

              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {address}
                </Typography>
                <input
                  placeholder="Address"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("address", { required: addressError })}
                  error={errors.address?.message}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {country}
                </Typography>
                <input
                  placeholder="Country"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("country", { required: countryError })}
                  error={errors.country?.message}
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </div>
              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {state}
                </Typography>
                <input
                  placeholder="State"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("state", {
                    required: stateError,
                  })}
                  error={errors.state?.message}
                />
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}
              </div>

              {/* City Field */}
              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {city}
                </Typography>
                <input
                  placeholder="City"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("city", {
                    required: cityError,
                  })}
                  error={errors.city?.message}
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </div>

              {/* Post Code Field */}
              <div>
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="mb-3"
                >
                  {postCode}
                </Typography>
                <input
                  placeholder="Post Code"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.post_code ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("post_code", {
                    required: postCodeError,
                    pattern: {
                      value: /^[0-9]{5}(-[0-9]{4})?$/,
                      message: postCodeFormat,
                    },
                  })}
                  error={errors.post_code?.message}
                />
                {errors.post_code && (
                  <p className="text-red-500">{errors.post_code.message}</p>
                )}
              </div>
            </div>
            <IButton
              type="submit"
              className="mt-6 flex ml-auto"
              onClick={handleOpen}
            >
              {isLoading ? joining : join}
            </IButton>
          </form>
        </FormCard>
      </Dialog>
    </>
  );
}
