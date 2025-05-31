import LoginForm from "./LoginForm";
import girl from "../../images/login-girl.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl">

        {/* Left Section */}
        <div className="flex flex-col items-center justify-center bg-leftPanel p-8 md:p-10 w-full md:w-1/2">
          <div className="text-4xl md:text-4xl font-bold mb-6 text-floeva">Floeva</div>
          <img
            src={girl}
            alt="Girl holding calendar"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-rightPanel">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
