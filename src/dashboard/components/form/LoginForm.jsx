import { Button, Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginValidationSchema from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import TextInput from "../../ui/TextInput";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await axios.post("http://localhost:4000/login", data).then((data) => {
      if (data.data.data !== null) {
        toast.success(data.data.message);
        localStorage.setItem("token", data.data.data.token);
        localStorage.setItem("role", data.data.data.role);
        localStorage.setItem("userId", data.data.data.id);
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
        <Form
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <TextInput type="email" name="email" />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <TextInput type="password" name="password" />
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
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
