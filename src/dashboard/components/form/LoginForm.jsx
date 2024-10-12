import { Button, Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginValidationSchema from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import TextInput from "../../ui/TextInput";
import axios from "axios";
import { useState } from "react";
import IButton from "../../ui/IButton";
import ForgotPassword from "./ForgotPassword";
import { PasswordModal } from "./PasswordModal";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post(`${URL}/login`, data).then((data) => {
        setIsLoading(false);
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("role", data.data.data.role);
        localStorage.setItem("userId", data.data.data.id);
        reset();
        navigate("/dashboard");
      });
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <section>
      <div className="my-5">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <span className="text-sm">Email</span>
          <input
            type="email"
            name="email"
            className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
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

          <span className="text-sm">Password</span>
          <input
            type="password"
            name="password"
            className={`border px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded ${
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
        </div>
        {/* <PasswordModal /> */}
        <IButton
          className="mt-6"
          type="submit"
          fullWidth
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Login..." : "Login"}
        </IButton>
        <Typography color="gray" className="mt-4 font-normal">
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </section>
  );
};

export default LoginForm;
