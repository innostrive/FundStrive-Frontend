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

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:4000/login", data).then((data) => {
        setIsLoading(false);
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("role", data.data.data.role);
        localStorage.setItem("userId", data.data.data.id);
        navigate("/dashboard");
      });
    } catch {
      toast.error(data.data.message);
      console.log("login error:", data.data.message);
    }
    try {
      setIsLoading(true);
      await axios
        .post("http://localhost:4000/forgot-password", data)
        .then((data) => {
          setIsLoading(false);
          console.log("resetLink:", data);
        });
    } catch {
      toast.error(data.data.message);
      console.log("login error:", data.data.message);
    }
    console.log("reset:", data);
  };

  return (
    <section>
      {forgotPassword ? (
        <Form onSubmit={onSubmit}>
          <TextInput
            type="email"
            name="email"
            label="Enter your email for reset password"
          />
          <IButton
            className="mt-6"
            type="submit"
            fullWidth
            disabled={isLoading ? true : false}
          >
            {isLoading ? "sending..." : "send"}
          </IButton>
        </Form>
      ) : (
        <>
          <div className="my-5">
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
          </div>
          <Form
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <TextInput type="email" name="email" label="Your Email" />
              <TextInput type="password" name="password" label="Password" />
            </div>
            <Typography
              color="gray"
              className="font-normal cursor-pointer"
              onClick={() => setForgotPassword(true)}
            >
              forgot password?
            </Typography>
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
          </Form>
        </>
      )}
    </section>
  );
};

export default LoginForm;
