import { useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
   

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  };
const deleteProduct = (id) => {

    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
};

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard </h1>

     
      <div className="mb-6">
        <h2 className="text-xl mb-2">Add Product</h2>

        <input
          type="text"
          placeholder="Product name"
          className="border p-2 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 mr-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={addProduct}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      
      <div>
        <h2 className="text-xl mb-2">Products</h2>

        

        {products.map((p) => (
        <div
            key={p.id}
            className="border p-3 mb-2 flex justify-between items-center"
        >
            <div>
            <p>{p.name}</p>
            <p className="text-gray-500">₹{p.price}</p>
            </div>

            <button
            onClick={() => deleteProduct(p.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
            >
            Delete
            </button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;