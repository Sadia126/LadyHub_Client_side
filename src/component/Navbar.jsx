import React, { useState, useEffect } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu,IoClose } from "react-icons/io5";
import { Heart } from "lucide-react";
import { useWishlist } from "./WishLish";

const Navbar = ({ cart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart ? cart.length : 0;
   const { wishlist } = useWishlist();

  return (
    <nav
      className={`fixed top-0 min-w-full z-30 transition-colors duration-300 ${
        scrolled
          ? "bg-white/25  backdrop-blur-sm shadow-md"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 h-16">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-cyan-950">
            GirlsHub
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-black font-medium hover:text-cyan-700">
            Home
          </Link>
          <Link
            to="/about"
            className="text-black font-medium hover:text-cyan-700"
          >
            About
          </Link>
          <Link to="/contact" className="text-black font-medium hover:text-blue-700">
  Contact Us
</Link>
<Link to="/wishlist" className="relative">
          <Heart className="w-6 h-6 text-blue-400 hover:text-red-500" 
          fill="currentColor"/>
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>

        </div>

        {/* Right side: Cart + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button
            className=" relative"
            onClick={() => navigate("/cart")}
          >
            <BsCartCheckFill className="text-4xl text-cyan-950" />
            {cartCount > 0 && (
              <span className="badge badge-sm indicator-item absolute -top-1 -right-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger for mobile */}
    

<button
  className="md:hidden rounded-lg mr-3.5"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <IoClose className="text-gray-900 text-4xl" />
  ) : (
    <IoMenu className="text-gray-900 text-4xl" />
  )}
</button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md w-full flex flex-col">
          <Link
            to="/"
            className="block px-4 py-3 text-black font-medium hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-3 text-black font-medium hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-3 text-black font-medium hover:bg-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
