import donation from "../../../assets/unity.png";
import SignUpForm from "../../../components/form/SignUpForm";
const SignUp = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 grid-cols-1 w-screen h-screen">
        <div className="h-full w-full grid content-center justify-items-center bg-[#f3f4f7]">
          <SignUpForm />
        </div>
        <div className="h-full w-full grid content-center justify-items-center bg-gray-200">
          <img src={donation} alt="" className="h-96 w-96 sm:p-0 p-5" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
