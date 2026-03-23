import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
    <div 
    style={{
      backgroundImage: "url('https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg')",
      backgroundSize: "cover",

    }}>
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold mb-4 text-white backdrop-blur-2xl border-2 p-4 border-r-5 border-b-5 rounded-tl-[30px]">
        Welcome to Shop App </h1>
      <p className="mb-6 text-gray-100 backdrop-blur-2xl rounded-2xl">
        Order products with just 25% initial payment
      </p>

      <div className="space-x-4"
      
      >
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link to="/register" className="bg-white text-black px-4 py-2 rounded">
          Register
        </Link>
        <a href="/shop" className="text-blue-500 ">
        Go to Shop
        </a>
      </div>
    </div>
    </div>
    </>
  );
}

export default Landing;