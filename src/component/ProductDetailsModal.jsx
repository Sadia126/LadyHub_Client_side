import React, { useState } from "react";

const ProductDetailsModal = ({ product, onClose, }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "");
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : "");

  return (
    <div className="fixed inset-0 flex justify-center items-start z-50 pt-10">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-xl w-11/12 sm:w-96 max-h-[90vh] overflow-y-auto shadow-lg flex flex-col z-10 text-black">
        <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-800 font-semibold mb-2">BDT {product.price}</p>
        <p className="mb-2">{product.description}</p>

        {product.sizes && (
          <div className="flex items-center gap-2 mb-2">
            <label className="font-semibold">Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border p-1 rounded"
            >
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {product.colors && (
          <div className="flex items-center gap-2 mb-2">
            <label className="font-semibold">Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border p-1 rounded"
            >
              {product.colors.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center gap-2 mb-4">
          <label className="font-semibold">Quantity:</label>
          <input
            type="number"
            min={1}
            max={product.stock || 10}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-1 rounded w-20"
          />
        </div>

        

        <button
          onClick={onClose}
          className="w-full py-2 bg-blue-400 text-white font-semibold rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
