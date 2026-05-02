import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-200">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          The new standard of shopping
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight animate-fade-in-up animation-delay-150">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lifestyle</span> Today
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Discover premium products curated just for you. Order now with only a 25% initial payment and enjoy the best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto animate-fade-in-up animation-delay-500">
          <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Start Shopping →
          </Link>
          <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            Create Account
          </Link>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform -rotate-3 hover:rotate-0 transition-transform text-3xl">
                🛍️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Every product is handpicked to ensure the highest quality standards.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform rotate-3 hover:rotate-0 transition-transform text-3xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Enjoy same-day delivery for select items across the country.</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform -rotate-3 hover:rotate-0 transition-transform text-3xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Your transactions are protected with industry-leading encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;