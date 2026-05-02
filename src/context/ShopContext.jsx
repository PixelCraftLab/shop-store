import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Wireless Headphones", price: "299", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
    { id: 2, name: "Mechanical Keyboard", price: "149", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80" },
    { id: 3, name: "Gaming Mouse", price: "89", image: "https://images.unsplash.com/photo-1527814050087-15104445d0ed?w=800&q=80" },
    { id: 4, name: "Smart Watch", price: "199", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" }
  ]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.id !== productId));
  };

  return (
    <ShopContext.Provider value={{ 
      products, setProducts, 
      cart, setCart, addToCart, removeFromCart,
      user, loginUser, logoutUser 
    }}>
      {children}
    </ShopContext.Provider>
  );
};