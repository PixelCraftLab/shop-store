import { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Antigravity from "@/components/Antigravity";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const handleLogin = () => {
  
  window.location.href = "/dashboard";
};
const handleregister = () => {
  
  window.location.href = "/Register";
};

  return (
    <div
    style={{
        backgroundColor: "black"
      }}
    className="h-screen flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Antigravity autoAnimate />
      </div>
      
      <div className="relative z-20 p-6 w-80">
        <h2 className= "m-5 text-blue-50 text-2xl mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="placeholder:text-blue-50 text-blue-50 w-full mb-3 p-2 border m-5"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="placeholder:text-blue-50 text-blue-50 w-full mb-3 p-2 border m-5"
          onChange={(e) => setPassword(e.target.value)}
        />

        <a className="text-blue-50 m-5">Don't have a account <span className="text-blue-500 cursor-pointer" onClick={handleregister}>Register</span> </a>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded m-5"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;