import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ProductDetailsModal from "./ProductDetailsModal";
import { useLocation } from "react-router-dom";
import { useWishlist } from "./WishLish";
import { Heart } from "lucide-react";

const ProductList = ({ cart = [], setCart }) => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]); // JSON theke data load hobe

  // JSON file fetch
  useEffect(() => {
    fetch("/Products.json") // public folder er file ke root theke access korte hobe
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  console.log(products)

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const { wishlist = [], addToWishlist, removeFromWishlist } = useWishlist() || {};

  return (
    <div className="p-4" id="products">
      {/* Search Section */}
      <div className="mb-8 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl text-blue-400 text-center font-bold">
          Our Products
        </h1>
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
            <FiSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-white"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {filteredProducts.map((product) => {
          const isInWishlist = wishlist?.some(
            (item) => item.id === product.id
          );

          return (
            <div
              key={product.id}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-4 flex flex-col items-center relative"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-40 h-40 object-cover mb-3 rounded text-gray-800"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-800 font-medium mb-3">
                Price: $ {product.price}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  disabled={!!cart.find((item) => item.id === product.id)}
                  className={`px-4 py-2 rounded-md text-white font-semibold ${
                    cart.find((item) => item.id === product.id)
                      ? "bg-blue-300 cursor-not-allowed"
                      : "bg-blue-400 hover:bg-blue-500"
                  }`}
                >
                  {cart.find((item) => item.id === product.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 rounded-md text-white font-semibold bg-blue-400 hover:bg-blue-500"
                >
                  Details
                </button>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() =>
                  isInWishlist
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className="absolute top-2 right-2 p-2 rounded-full bg-white/20"
              >
                <Heart
                  size={24}
                  className={isInWishlist ? "text-blue-400" : "text-blue-300"}
                  fill="currentColor"
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
