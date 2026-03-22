import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const res = await axios.post("http://localhost:3000/register", {
//         email,
//         password,
//       });

//       alert(res.data);
//     } catch (err) {
//       alert(err.response?.data || "Error");
//     }
//   };
const handleRegister = () => {
  
  window.location.href = "/dashboard";
};

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 border rounded w-80">
        <h2 className="text-2xl mb-4">Register</h2>

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
          onClick={handleRegister}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;