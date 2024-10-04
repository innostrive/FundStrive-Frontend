import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Form from "./Form";
import TextInput from "../../ui/TextInput";
import IButton from "../../ui/IButton";
import FormCard from "../../ui/FormCard";
import { toast } from "react-toastify";
import axios from "axios";

export function PasswordModal() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetLink, setResetLink] = useState(false);

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data) => {
    try {
      await axios
        .post("http://localhost:4000/forgot-password", data)
        .then((data) => {
          if (data.status === 200) {
            toast.success(data.data.message);
            setResetLink(true);
            console.log("resetLink:", data);
          }
        });
    } catch {
      toast.error(data.data.message);
      console.log("login error:", data.data.message);
    }
    console.log("reset-password:", data);
  };
  return (
    <>
      <Typography
        color="gray"
        className="font-normal cursor-pointer mt-2"
        onClick={handleOpen}
      >
        forgot password?
      </Typography>
      <Dialog open={open} handler={handleOpen}>
        <FormCard title="Send Email">
          <Form onSubmit={onSubmit}>
            <DialogBody>
              <TextInput type="email" label="email" name="email" />
              <IButton className="mt-6" type="submit" fullWidth>
                send
              </IButton>
              {resetLink && (
                <span className="text-base font-normal text-green-300">
                  Please Check Your Email For Reset Your Password
                </span>
              )}
            </DialogBody>
            <DialogFooter>
              <Button onClick={handleOpen} color="green" className="mr-1">
                <span>Cancel</span>
              </Button>
              {/* <IButton className="mt-6" type="submit">
                <span>Send</span>
              </IButton> */}
            </DialogFooter>
          </Form>
        </FormCard>
      </Dialog>
    </>
  );
}
