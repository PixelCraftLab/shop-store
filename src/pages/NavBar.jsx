import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const { user, logoutUser, cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm flex justify-between items-center px-6 md:px-14 py-4 transition-all duration-300"
    >
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
        <span className="text-blue-600 font-extrabold">S</span>
        Smart<span className="text-blue-600">Store</span>
      </Link>

      <div className="flex gap-4 md:gap-6 items-center">
        <Link to="/shop" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
          Shop
        </Link>
        
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <button onClick={handleLogout} className="text-gray-600 hover:text-red-600 font-medium transition-colors flex items-center gap-1 cursor-pointer">
              <span className="hidden md:inline">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Register
            </Link>
          </>
        )}

        <div className="relative cursor-pointer ml-2 text-gray-800 hover:text-blue-600 transition-colors font-medium">
          Cart
          {cartItemsCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartItemsCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;