import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = () => {

    window.location.href = "/dashboard";
  };
  const handlelogin = () => {

    window.location.href = "/Login";
  };

  return (
    <div
      style={{
        backgroundColor: "black"
      }}
      className=" h-screen flex justify-center items-center">
      <div className="p-6 border rounded w-80 ">
        <h2 className="m-5 text-2xl mb-4 text-cyan-200 ">Register</h2>

        <input
          
          type="email"
          placeholder="Email"
          className="text-cyan-200 placeholder:text-cyan-200 w-full mb-3 p-2 border m-5"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-cyan-200 placeholder:text-cyan-200 w-full mb-3 p-2 border m-5"
          onChange={(e) => setPassword(e.target.value)}
        />

        <a className="text-blue-50 m-5">Already have a account <span className="text-blue-500 cursor-pointer" onClick={handlelogin}>Login</span> </a>

        <button
          onClick={handleRegister}
          className="cursor-pointer w-full bg-white text-black p-2 rounded m-5"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;