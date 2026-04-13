
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";


function Dashboard() {
  const { products, setProducts } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {


    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    setProducts([...products, newProduct]);

    setName("None");
    setPrice("0");
  };
  const deleteProduct = (id) => {

    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  return (
    <div className="">
      <div className=" p-6">
        <h1 className="mt-15 text-3xl font-bold mb-4">Dashboard </h1>


        <div className="mb-6">
          <h2 className=" text-xl mb-2">Add Product</h2>

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



          {products.length === 0 ? (
            <p className="text-gray-500">No products added yet</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {products.map((p) => (
                <div
                  key={p.id}
                  className="border p-4 rounded-lg flex flex-col gap-2 shadow-md"
                >

                  <div>
                    <p className="font-semibold text-lg">{p.name}</p>
                    <p className="text-gray-500">₹{p.price}</p>
                  </div>


                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mt-2"
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
  );
}

export default Dashboard;