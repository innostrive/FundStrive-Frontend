import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import IButton from "../../ui/IButton";
import TextInput from "../../ui/TextInput";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = async () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
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
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextInput type="email" name="email" label="Your Email" />
      <IButton
        className="mt-6"
        type="submit"
        fullWidth
        disabled={isLoading ? true : false}
      >
        {isLoading ? "sending..." : "send"}
      </IButton>
    </Form>
  );
};

export default ForgotPassword;
