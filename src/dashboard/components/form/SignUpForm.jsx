import { Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Form from "./Form";
import axios from "axios";
import TextInput from "../../ui/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import userRegistrationSchema from "../../schemas/registration.schema";
import IButton from "../../ui/IButton";
import { useForm } from "react-hook-form";
import { getTranslationObject } from "../../../../i18next";
const SignUpForm = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const translation = getTranslationObject("public");
  const {
    name,
    nameError,
    email,
    emailError,
    emailFormat,
    password,
    passwordError,
    passwordFormat,
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
    signUp,
    newAccount,
    login,
    postCodeFormat,
    signUpSuccess,
    signing,
  } = translation?.signUp;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      image: data.image,
      ...data,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL}/signup`, payload);
      setIsLoading(false);
      if (response.status === 200) {
        toast.success(response.data.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(signUpSuccess);
    }
  };
  return (
    <div className="w-full max-w-3xl sm:p-0 p-5">
      <Typography variant="h4" color="blue-gray" className="my-5">
        {signUp}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {name}
            </Typography>
            <input
              type="text"
              name="name"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: nameError,
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {email}
            </Typography>
            <input
              type="email"
              name="email"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: emailError,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: emailFormat,
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {password}
            </Typography>
            <input
              type="password"
              name="password"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: passwordError,
                minLength: {
                  value: 6,
                  message: passwordFormat,
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {phoneNumber}
            </Typography>
            <input
              type="text"
              name="phone_number"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.phone_number ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone_number", {
                required: phoneNumberError,
              })}
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {address}
            </Typography>
            <input
              type="text"
              name="address"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              {...register("address", { required: addressError })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {country}
            </Typography>
            <input
              type="text"
              name="country"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              {...register("country", { required: countryError })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {state}
            </Typography>
            <input
              type="text"
              name="state"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              {...register("state", { required: stateError })}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {city}
            </Typography>
            <input
              type="text"
              name="city"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              {...register("city", { required: cityError })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              {postCode}
            </Typography>
            <input
              type="text"
              name="post_code"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.post_code ? "border-red-500" : "border-gray-300"
              }`}
              {...register("post_code", {
                required: postCodeError,
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: postCodeFormat,
                },
              })}
            />
            {errors.post_code && (
              <p className="text-red-500 text-sm">{errors.post_code.message}</p>
            )}
          </div>
        </div>
        <IButton
          className="mt-6"
          type="submit"
          fullWidth
          disabled={isLoading ? true : false}
        >
          {isLoading ? signing : signUp}
        </IButton>
        <Typography color="gray" className="mt-4 text-center font-normal">
          {newAccount}
          <Link to={"/login"} className="font-medium text-gray-900">
            {login}
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default SignUpForm;
