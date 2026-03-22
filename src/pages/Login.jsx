import { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:3000/login", {
//         email,
//         password,
//       });

//       alert(res.data);
//     } catch (err) {
//       alert(err.response?.data || "Error");
//     }
//   };
const handleLogin = () => {
  
  window.location.href = "/dashboard";
};

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 border rounded w-80">
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;