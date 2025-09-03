import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    // Navigate to Home page with hash
    navigate("/#products");
  };
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to <span className="font-semibold">GirlsHub</span> — your
          destination for trendy, affordable, and high-quality fashion made just
          for you.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://img.daisyui.com/images/stock/photo-1602626131836-b6e6c51f92d8.webp"
          alt="Our Story"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Our Story</h2>
          <p className="mb-4">
            We started <span className="font-semibold">GirlsHub</span> in 2023
            with a simple mission — to bring fashionable yet affordable styles
            for every girl. From small beginnings, we have grown into a trusted
            brand serving thousands of happy customers worldwide.
          </p>
          <p>
            Every product we create is designed with love, care, and attention
            to detail so you can look your best while feeling confident.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-blue-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>We ensure every piece is made with premium materials.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p>Trendy fashion at prices every girl can enjoy.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p>
                Your happiness is our priority. We’re here to serve you always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Join Our Family of Fashion Lovers
        </h2>
        <p className="mb-6">
          Discover the latest trends and express your unique style with us.
        </p>
  <button
      onClick={handleShopNow}
      className="bg-blue-400 hover:bg-blue-300 text-white px-6 py-3 rounded-full font-semibold"
    >
      Shop Now
    </button>

      </section>
    </div>
  );
};

export default About;
