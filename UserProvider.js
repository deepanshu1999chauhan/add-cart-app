import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null); // old

  const [cartItems, setCartItems] = useState([]); // NEW CART 

  const fetchTodos = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <UserContext.Provider value={{
      todos,
      setTodos,
      selectedProduct,
      setSelectedProduct,
      cartItems,
      setCartItems
    }}>
      {children}
    </UserContext.Provider>
  );
};