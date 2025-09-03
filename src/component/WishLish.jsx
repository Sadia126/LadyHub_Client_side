import { createContext, useContext, useState } from "react";

const Wishlish = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // wishlist এ যোগ করা
  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // wishlist থেকে মুছে ফেলা
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <Wishlish.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </Wishlish.Provider>
  );
};

export const useWishlist = () => useContext(Wishlish);
