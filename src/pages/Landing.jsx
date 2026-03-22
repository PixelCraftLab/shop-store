import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Shop App 🛒</h1>
      <p className="mb-6 text-gray-600">
        Order products with just 25% initial payment!
      </p>

      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Landing;