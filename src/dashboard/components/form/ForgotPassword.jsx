import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import TextInput from "../../ui/TextInput";
import IButton from "../../ui/IButton";
import donation from "../../assets/donation.jpg";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      // setIsLoading(true);
      await axios
        .post("http://localhost:4000/forgot-password", data)
        .then((data) => {
          // setIsLoading(false);
          toast.success(data.data.message);
          console.log("resetLink:", data);
        });
    } catch {
      toast.error(data.data.message);
      console.log("login error:", data.data.message);
    }
    console.log("reset-password:", data);
  };
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-screen h-screen">
      <div className="h-full w-full grid content-center justify-items-center bg-[#f3f4f7]">
        <Form onSubmit={onSubmit}>
          {/* <TextInput type="password" name="new_password" label="New Password" />
          <TextInput
            type="password"
            name="confirm_password"
            label="Confirm Password"
          /> */}
          <TextInput type="email" label="email" name="email" />
          <IButton className="mt-6" type="submit" fullWidth>
            send
          </IButton>
        </Form>
      </div>
      <div className="h-full w-full grid content-center justify-items-center bg-gray-200">
        <img src={donation} alt="" className="h-96 w-96" />
      </div>
    </div>
  );
};

export default ResetPassword;
