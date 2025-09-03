import React from "react";

const CartPage = ({ cart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="p-4 md:p-6 min-h-screen  bg-white/25  backdrop-blur-sm shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-red-600 font-bold  text-7xl text-center">Your cart is empty !</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center border-b border-gray-900 pb-4"
            >
              {/* Product Info */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-2/3">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-32 h-32 md:w-24 md:h-24 object-cover rounded"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-black text-lg">{item.name}</p>
                  <p className="text-black text-xl">Price:$S {item.price}</p>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="mt-2 md:mt-0 w-full md:w-auto flex justify-center md:justify-end ">
                <button className="bg-blue-200 hover:bg-blue-950 px-4 py-2 rounded-md text-white font-semibold">Buy Now</button>
              </div>
            </div>
          ))}

          {/* Subtotal */}
          <div className="mt-6 text-right">
            <p className="text-xl md:text-2xl font-bold text-black">
              Subtotal: ${subtotal}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
