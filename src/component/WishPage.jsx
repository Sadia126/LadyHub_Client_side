import { useWishlist } from "./WishLish";
import { Trash2 } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-4xl font-semibold text-red-600">Your Wishlist Empaty 💔</h2>
        <p className="text-blue-400 text-2xl font-semibold mt-2">Please Click Heart Icon To Added Wishlist


        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl text-blue-400 font-bold mb-6">
        My Wishlist ❤️</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-lg mb-3 text-black"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-800">${product.price}</p>

            <div className="flex gap-3 mt-4">
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
