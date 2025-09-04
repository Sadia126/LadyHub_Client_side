import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ProductList from "./component/ProductList";
import About from "./component/About";
import CartPage from "./component/Cart";
import Footer from "./component/Footer";
import ContactUs from "./component/Contact";
import WishPage from "./component/WishPage";
import "./index.css";
import "./App.css";
import Login from "./component/login";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider";

function App() {
  const [cart, setCart] = useState([]);
  const [navHeight, setNavHeight] = useState(0); // Navbar height state

  return (
    <div className="min-h-screen bg-white">
     <AuthProvider>
       <Router>
        {/* Navbar sends its height */}
        <Navbar cart={cart} onHeightChange={setNavHeight} />
        
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero now receives navHeight */}
                  <Hero navbarHeight={navHeight} />
                  <ProductList cart={cart} setCart={setCart} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/wishlist" element={<WishPage />} />
          </Routes>
        </div>

        <Footer />
        <Toaster></Toaster>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
