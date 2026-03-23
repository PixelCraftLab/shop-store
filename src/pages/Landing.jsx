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
      <h1 className=" text-4xl font-bold mb-8 text-white backdrop-blur-2xl border-2 p-4 border-r-5 border-b-5 rounded-tl-[30px]">
        Welcome to Shop App </h1>
      <p className=" mb-13 text-gray-100 backdrop-blur-2xl rounded-2xl">
        Order products with just 25% initial payment
      </p>

      <div className="space-x-4"
      
      >
        
        <a href="/shop" className="m-10 bg-white p-2 rounded-2xl text-black animate-pulse hover:bg-black hover:text-white transform transition-all duration-500 ease-in-ou">
        Go to Shop
        </a>
      </div>
    </div>
    </div>
    </>
  );
}

export default Landing;