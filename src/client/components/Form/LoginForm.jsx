import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useFormContext } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "../../../dashboard/schemas/login.schema";

const LoginForm = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const onSubmit = async (data) => {
    await axios.post(`${URL}/login`, data).then((data) => {
      if (data.data.data !== null) {
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("role", data.data.data.role);
        navigate("/dashboard");
      } else {
        toast.error(data.data.message);
      }
    });
  };

  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          resolver={zodResolver(loginValidationSchema)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email")}
              error={errors ? errors.message : ""}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password")}
              error={errors ? errors.message : ""}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to={"/sign-up"} className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
