import React, { useState } from "react";
import { Dialog, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import FormCard from "../../../dashboard/ui/FormCard";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { X } from "../../assets/icons/icons";

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
                  Your Name
                </Typography>
                <input
                  placeholder="Name"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("name", { required: "Name is required" })}
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
                  Your Email
                </Typography>
                <input
                  placeholder="example@mail.com"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
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
                  Phone Number
                </Typography>
                <input
                  placeholder="Phone number"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.phone_number ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("phone_number", {
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Phone number must be at least 10 digits",
                    },
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
                  Address
                </Typography>
                <input
                  placeholder="Address"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("address", { required: "Address is required" })}
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
                  Country
                </Typography>
                <input
                  placeholder="Country"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("country", { required: "Country is required" })}
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
                  State
                </Typography>
                <input
                  placeholder="State"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("state", {
                    required: "State is required",
                    minLength: {
                      value: 2,
                      message: "State must be at least 2 characters",
                    },
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
                  City
                </Typography>
                <input
                  placeholder="City"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("city", {
                    required: "City is required",
                    minLength: {
                      value: 2,
                      message: "City must be at least 2 characters",
                    },
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
                  Post Code
                </Typography>
                <input
                  placeholder="Post Code"
                  className={`border px-2 py-1.5 w-full focus:outline-gray-300 focus:outline-1 rounded ${
                    errors.post_code ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("post_code", {
                    required: "Post code is required",
                    pattern: {
                      value: /^[0-9]{5}(-[0-9]{4})?$/,
                      message: "Invalid post code format",
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
              {isLoading ? "Joinig..." : "Join"}
            </IButton>
          </form>
        </FormCard>
      </Dialog>
    </>
  );
}
