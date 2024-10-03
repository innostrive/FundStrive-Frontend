import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
import FormCard from "../../../dashboard/ui/FormCard";
import Form from "../../../dashboard/components/form/Form";
import TextInput from "../../../dashboard/ui/TextInput";

export function VolunteerForm({ open, handleOpen }) {
  const onSubmit = (data) => {
    console.log("volunteer:", data);
  };
  return (
    <>
      <IButton className="bg-primary" onClick={handleOpen}>
        Join Us
      </IButton>
      <Dialog size="md" open={open} handler={handleOpen}>
        <FormCard className="bg-[#F9F7F7]" title="Join as a volunteer">
          <Form onSubmit={onSubmit} className="mt-8 mb-2 w-full">
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
            <IButton className="mt-6 flex ml-auto">Join</IButton>
          </Form>
        </FormCard>
      </Dialog>
    </>
  );
}
