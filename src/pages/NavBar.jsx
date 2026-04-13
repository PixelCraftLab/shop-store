import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/10 border-b border-white/20
        shadow-lg shadow-black/20
        flex justify-between items-center
        px-6 md:px-14 py-3
      "
    >

      <h1 className="text-white text-xl font-semibold tracking-wide">
        Smart Store
      </h1>


      <div className="flex gap-4 items-center">

        <Link
          to="/login"
          className="
            px-4 py-2 rounded-lg text-white
            hover:bg-white/10
            transition duration-300 ease-in-out
          "
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
            px-5 py-2 rounded-lg
            bg-white text-black font-medium
            hover:bg-gray-200
            transition duration-300 ease-in-out
          "
        >
          Register
        </Link>

      </div>
    </div>
  );
};

export default NavBar;