import { useState } from "react";
import Form from "../../../../dashboard/components/form/Form";
import IButton from "../../../../dashboard/ui/IButton";
import TextInput from "../../../../dashboard/ui/TextInput";
import axios from "axios";
import donation from "../../../assets/donation.jpg";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  // console.log("token:", token);
  const [isLoading, setIsLoading] = useState(false);
  const URL = import.meta.env.VITE_BASE_URL;
  const onSubmit = async (data) => {
    // setIsLoading(true);
    const payload = {
      ...data,
      reset_link: token,
    };
    try {
      await axios
        .post(
          `${URL}/reset-password`,
          payload
          //    {
          //   headers: {
          //     Authorization: `${token}`,
          //   },
          // }
        )
        .then((data) => {
          // setIsLoading(false);
          if (data.status === 200) {
            toast.success(data.data.message);
          }
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
          <TextInput type="password" name="new_password" label="New Password" />
          <TextInput
            type="password"
            name="confirm_password"
            label="Confirm Password"
          />
          {/* <TextInput type="email" label="email" name="email" /> */}
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
