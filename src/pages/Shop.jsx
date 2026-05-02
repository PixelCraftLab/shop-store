import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Shop() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Collection</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover the latest premium products curated just for you.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="text-blue-500 font-bold">↑</span> Showing {products.length} products
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={p.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"} 
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1">
                  ⭐ 4.9
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{p.name}</h3>
                <div className="text-2xl font-black text-gray-900 mb-4 mt-auto">
                  ₹{p.price}
                </div>
                
                <button
                  onClick={() => addToCart(p)}
                  className="w-full py-3 px-4 bg-gray-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 border-dashed">
            <div className="text-5xl text-gray-300 mx-auto mb-4">🛒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products available</h3>
            <p className="text-gray-500">Please check back later or add products from the dashboard.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
