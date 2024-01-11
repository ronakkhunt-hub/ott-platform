import React from "react";
import { Logo } from "../components";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background:
          "url(https://flixtv.volkovdesign.com/main/img/bg().jpg) center center / cover no-repeat",
      }}
    >
      <div className="w-96 p-10 flex flex-col justify-center rounded-xl border border-[#2f80ed1a] bg-[#141821ff]">
        <Logo className="text-center mb-8" />

        <input
          type="email"
          placeholder="Email"
          className="pl-4 mb-6 w-full h-10 bg-[#2f80ed1a] text-white transition-all duration-700 outline-none focus:outline focus:outline-blue-500 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="pl-4 mb-6 w-full h-10 bg-[#2f80ed1a] text-white transition-all duration-700 outline-none focus:outline focus:outline-blue-500 rounded-xl"
        />

        <div className="flex gap-2 mb-10 text-white">
          <input
            type="checkbox"
            className="scale-125 accent-blue-500 cursor-pointer"
          />
          Remember me
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-500 py-3 rounded-2xl text-white"
        >
          Submit
        </button>

        <div className="flex gap-2 flex-col text-center text-white mt-7">
          <div>
            Don't have an account?{" "}
            <Link className="text-blue-500" to="/register">
              Sign up!
            </Link>
          </div>
          <Link className="text-blue-500" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
