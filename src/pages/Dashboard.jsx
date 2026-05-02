import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { products, setProducts, user } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image: image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setImage("");
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            📦
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-500 mb-6">You must be logged in to access the dashboard.</p>
          <Link to="/login" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Seller <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-gray-500 mt-2">Manage your products and inventory.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Product Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-blue-600 font-bold">+</span> Add New Product
              </h2>

              <form onSubmit={addProduct} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wireless Mouse"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 299"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full mt-4 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="font-bold">+</span> Add Product
                </button>
              </form>
            </div>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-gray-500">📦</span> Current Inventory ({products.length})
              </h2>

              {products.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                  <div className="text-5xl text-gray-300 mx-auto mb-3">📦</div>
                  <p className="text-gray-500 font-medium">No products added yet.</p>
                  <p className="text-gray-400 text-sm mt-1">Use the form to add your first product.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {products.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all group"
                    >
                      <img 
                        src={p.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"} 
                        alt={p.name}
                        className="w-16 h-16 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                      />
                      <div className="ml-4 flex-grow">
                        <p className="font-bold text-gray-900 text-lg">{p.name}</p>
                        <p className="text-gray-500 font-medium">₹{p.price}</p>
                      </div>
                      
                      <button
                        onClick={() => deleteProduct(p.id)}
                        className="cursor-pointer px-4 py-2 text-sm text-red-500 hover:text-white hover:bg-red-500 font-semibold rounded-lg transition-colors border border-red-200"
                        aria-label="Delete product"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;