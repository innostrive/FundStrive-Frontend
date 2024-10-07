import { useNavigate } from "react-router-dom";
import Form from "../../../../dashboard/components/form/Form";
import IButton from "../../../../dashboard/ui/IButton";
import TextInput from "../../../../dashboard/ui/TextInput";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPasswordForm = ({ token }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const URL = import.meta.env.VITE_BASE_URL;
  const onSubmit = async (data) => {
    setIsLoading(true);
    const payload = {
      ...data,
      reset_link: token,
    };
    try {
      await axios.post(`${URL}/reset-password`, payload).then((data) => {
        setIsLoading(false);
        if (data.status === 200) {
          toast.success(data.data.message);
          navigate("/login");
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
    <section>
      <Form
        onSubmit={onSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <TextInput
          type="password"
          name="new_password"
          label="New Password"
          className="w-full"
        />
        <TextInput
          type="password"
          name="confirm_password"
          label="Confirm Password"
        />
        <IButton className="mt-6" type="submit" fullWidth>
          send
        </IButton>
      </Form>
    </section>
  );
};

export default ResetPasswordForm;
