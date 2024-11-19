import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import IButton from "../../ui/IButton";
import FormCard from "../../ui/FormCard";
import { getTranslationObject } from "../../../../i18next";
const CreateUser = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    name,
    email,
    phoneNumber,
    address,
    state,
    city,
    postCode,
    country,
    submit,
    userCreateSuccess,
    error,
  } = dashboardTranslations?.form;
  const {
    nameErr,
    nameErrMsg,
    emailErr,
    emailErrMsg,
    phoneNumberErr,
    phoneNumberErrMsg,
    addressErr,
    stateErr,
    cityErr,
    postCodeErr,
    postCodeErrMsg,
    countryErr,
  } = dashboardTranslations?.errors;
  const { createUser, users } = dashboardTranslations?.dashboardTitle;
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      role: "maintainer",
      password: "123456",
      image: data.image,
      ...data,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL}/signup`, payload);
      setIsLoading(false);
      if (response.status === 200) {
        toast.success(userCreateSuccess);
        navigate("/admin-dashboard/users");
      }
    } catch {
      toast.error(error);
    }
  };
  return (
    <FormCard title={createUser}>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30">
        <NavLink to="/admin-dashboard/users" className="opacity-60">
          {users}
        </NavLink>
        <span className="cursor-context-menu">{createUser}</span>
      </Breadcrumbs>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {name}
            </Typography>
            <input
              type="text"
              name="name"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: nameErr,
                minLength: {
                  value: 3,
                  message: nameErrMsg,
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {email}
            </Typography>
            <input
              type="email"
              name="email"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: emailErr,
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: emailErrMsg,
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {phoneNumber}
            </Typography>
            <input
              type="text"
              name="phone_number"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.phone_number ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone_number", {
                required: phoneNumberErr,
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: phoneNumberErrMsg,
                },
              })}
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {address}
            </Typography>
            <input
              type="text"
              name="address"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              {...register("address", { required: addressErr })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {country}
            </Typography>
            <input
              type="text"
              name="country"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              {...register("country", { required: countryErr })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {state}
            </Typography>
            <input
              type="text"
              name="state"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              {...register("state", { required: stateErr })}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {city}
            </Typography>
            <input
              type="text"
              name="city"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              {...register("city", { required: cityErr })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div>
            <Typography className="mb-3 text-sm text-secondary">
              {postCode}
            </Typography>
            <input
              type="text"
              name="post_code"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.post_code ? "border-red-500" : "border-gray-300"
              }`}
              {...register("post_code", {
                required: postCodeErr,
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: postCodeErrMsg,
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
          {isLoading ? `${loading}` : `${submit}`}
        </IButton>
      </form>
    </FormCard>
  );
};

export default CreateUser;
