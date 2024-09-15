import donation from "../../../assets/donation.jpg";
import SignUpForm from "../../../components/Form/SignUpForm";
const SignUp = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-screen h-screen">
        <div className="h-full w-full grid content-center justify-items-center bg-[#f3f4f7]">
          <SignUpForm />
        </div>
        <div className="h-full w-full grid content-center justify-items-center bg-gray-200">
          <img src={donation} alt="" className="h-96 w-96" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
