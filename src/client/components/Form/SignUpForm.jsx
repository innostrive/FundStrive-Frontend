import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SignUpForm = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await axios.post(`${URL}/signup`, data).then((data) => {
      console.log("user data:", data);
      if (data.data.data !== null) {
        toast.success(data.data.message);
        navigate("/login");
      } else {
        toast.error(data.data.message);
      }
    });
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("name")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="example@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("email")}
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
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone Number
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="phone number"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("phone_number")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Address
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="address"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("address")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Country
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="country"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("country")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            State
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="state"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("state")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            City
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="city"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("city")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Post Code
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Post Code"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("post_code")}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Upload Image
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Upload Image"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("image")}
            // onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default SignUpForm;
