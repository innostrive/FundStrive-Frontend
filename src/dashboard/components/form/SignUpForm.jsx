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
const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const payload = {
      image: data.image,
      ...data,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:4000/signup",
        payload
      );
      console.log("Response:", response.data);
      setIsLoading(false);
      toast.success("Sign up successful!");
      navigate("/login");
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="w-full max-w-3xl sm:p-0 p-5">
      <Typography variant="h4" color="blue-gray" className="my-5">
        Sign Up
      </Typography>
      <Form
        onSubmit={onSubmit}
        resolver={zodResolver(userRegistrationSchema)}
        className="mt-8 mb-2 w-full"
      >
        <div className="mb-1 grid sm:grid-cols-2 grid-cols-1  gap-5">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Name
            </Typography>
            <TextInput type="text" name="name" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Your Email
            </Typography>
            <TextInput type="email" name="email" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Password
            </Typography>
            <TextInput type="password" name="password" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Phone Number
            </Typography>
            <TextInput type="text" name="phone_number" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Address
            </Typography>
            <TextInput type="text" name="address" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Country
            </Typography>
            <TextInput type="text" name="country" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              State
            </Typography>
            <TextInput type="text" name="state" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              City
            </Typography>
            <TextInput type="text" name="city" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Post Code
            </Typography>
            <TextInput type="text" name="post_code" />
          </div>
        </div>
        <IButton
          className="mt-6"
          type="submit"
          fullWidth
          disabled={isLoading ? true : false}
        >
          {isLoading ? "Signing Up..." : "Sign up"}
        </IButton>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </Form>
    </div>
  );
};

export default SignUpForm;
