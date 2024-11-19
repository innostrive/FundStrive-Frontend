import donation from "../../../assets/unity.png";
import LoginForm from "../../../components/form/LoginForm";
const Login = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 w-screen h-screen">
        <div className="h-full w-full grid content-center justify-items-center bg-[#f3f4f7]">
          <LoginForm />
        </div>
        <div className="h-full w-full grid content-center justify-items-center bg-gray-200">
          <img src={donation} alt="" className="h-96 w-96" />
        </div>
      </div>
    </>
  );
};

export default Login;
