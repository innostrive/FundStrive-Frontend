import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import IButton from "../../ui/IButton";
import FormCard from "../../ui/FormCard";
const CreateUser = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const payload = {
      password: "123456",
      image: data.image,
      ...data,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(`${URL}/signup`, payload);
      setIsLoading(false);
      if (response.status === 200) {
        toast.success(response.data.data.message);
        console.log("message:", response.data.data.message);
        navigate("/dashboard/users");
      }
    } catch (error) {
      toast.error("Failed to sign up. Please try again.");
      console.log("error", error);
    }
  };
  return (
    <FormCard title="Create User">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Name
            </Typography>
            <input
              type="text"
              name="name"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Email
            </Typography>
            <input
              type="email"
              name="email"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Password
            </Typography>
            <input
              type="password"
              name="password"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div> */}

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Phone Number
            </Typography>
            <input
              type="text"
              name="phone_number"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.phone_number ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
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
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Address
            </Typography>
            <input
              type="text"
              name="address"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Country
            </Typography>
            <input
              type="text"
              name="country"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              State
            </Typography>
            <input
              type="text"
              name="state"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              {...register("state", { required: "State is required" })}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              City
            </Typography>
            <input
              type="text"
              name="city"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Post Code
            </Typography>
            <input
              type="text"
              name="post_code"
              className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                errors.post_code ? "border-red-500" : "border-gray-300"
              }`}
              {...register("post_code", {
                required: "Post code is required",
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: "Enter a valid 5-digit post code",
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
          {isLoading ? "Loading..." : "Create"}
        </IButton>
      </form>
    </FormCard>
  );
};

export default CreateUser;
