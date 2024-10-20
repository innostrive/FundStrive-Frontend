import React, { useState } from "react";
import { Dialog, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import FormCard from "../../../dashboard/ui/FormCard";
import Form from "../../../dashboard/components/form/Form";
import TextInput from "../../../dashboard/ui/TextInput";
import { toast } from "react-toastify";
import userRegistrationSchema from "../../../dashboard/schemas/registration.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import volunteerRegistrationSchema from "../../../dashboard/schemas/volunteerRegistrationSchema";
import axios from "axios";

export function VolunteerForm({ open, handleOpen }) {
  const [isLoading, setIsLoading] = useState(false);

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
        toast.success("Congratulation to join as a volunteer");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("Failed to Join. Please try again.");
    }
    if (data) {
    }
    console.log("volunteer:", volunteerData);
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
        <FormCard className="bg-[#F9F7F7]" title="Join as a volunteer">
          <Form
            onSubmit={onSubmit}
            resolver={zodResolver(volunteerRegistrationSchema)}
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
            <IButton className="mt-6 flex ml-auto">
              {isLoading ? "Joinig..." : "Join"}
            </IButton>
          </Form>
        </FormCard>
      </Dialog>
    </>
  );
}
