import { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Girlshub</h1>
        <p className="text-gray-600 mb-6">
          Sign in to continue to your account
        </p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
