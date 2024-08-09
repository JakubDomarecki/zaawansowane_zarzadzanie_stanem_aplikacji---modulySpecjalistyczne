import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    if (cart.some((p) => p.id === product.id)) return;
    setCart((prevCart) => [...prevCart, product]);
  },[cart])


 const removeFromCart = useCallback((productId) => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
 }, [])



  const clearCart = useCallback(() => {
    setCart([]);
  },[]);

  const contextValue = useMemo(() => {
    return {cart, addToCart, removeFromCart, clearCart}
  }, [cart, addToCart, removeFromCart, clearCart])


  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
};
