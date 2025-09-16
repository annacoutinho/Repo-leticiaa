import { createContext, useState, useContext, useEffect } from "react";
import products from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "techwave_cart";

function readStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function CartProvider({ children }) {
  const [cart, setCart] = useState(readStoredCart());
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    const totalItems =
      cart && cart.length > 0
        ? cart.reduce((sum, item) => sum + (item.quantity || 0), 0)
        : 0;
    setCartQuantity(totalItems);
  }, [cart]);

  const productExists = (id) => cart.find((item) => item.id === id);

  const addToCart = (id) => {
    const base = products.find((p) => p.id === id);
    if (!base) return;

    const inCart = productExists(id);
    if (inCart) {
      const updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...base, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  const decrease = (id) => {
    const target = cart.find((item) => item.id === id);
    if (!target) return;

    if (target.quantity <= 1) {
      removeFromCart(id);
    } else {
      const updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updated);
    }
  };


  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = {
    cart,
    cartQuantity,
    addToCart,
    removeFromCart,
    increase,
    decrease,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa ser utilizado dentro de um Provider.");
  return ctx;
};
