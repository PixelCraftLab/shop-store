import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Shop() {
  const { products } = useContext(ShopContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shop </h1>

      

      {products.map((p) => (
        <div key={p.id} className="border p-3 mb-2">
          <p>{p.name}</p>
          <p className="text-gray-500">₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;