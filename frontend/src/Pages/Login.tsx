import React, { useState } from "react";
import { FaBriefcase, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-2/5 bg-blue-400 p-4"></div>

        {/* Right Side */}
        <div className="w-3/5  p-8">
          {/* Header */}
          <div className="flex items-center mt-16 pl-24 space-x-2">
            <FaBriefcase className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold text-gray-900">
              JagireNepali
            </span>
          </div>

          {/* Login Form */}
          <form className="pl-24 mt-8 space-y-6">
            <div className="m-20">
              {/* Username Input */}
              <div className="relative m-2">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-12 p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="relative m-2">
                <FaLock className="absolute top-4 left-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-12 p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Log In
              </button>

              {/* Links */}
              <div className="flex justify-between mt-4 text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
