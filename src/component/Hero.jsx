import React, { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "/src/assets/girls.jpg",
    title: "Trendy Outfits for Every Girl",
    desc: "Explore our latest fashion collection designed just for you.",
    btn: "Shop Now",
  },
  {
    id: 2,
    img: "/src/assets/shop.jpg",
    title: "Discover Your Style",
    desc: "From casual to classy, find outfits that match your vibe.",
    btn: "Explore",
  },
  {
    id: 3,
    img: "/src/assets/fashion2.jpg",
    title: "Feel Confident, Look Amazing",
    desc: "Fashion that makes you stand out everywhere you go.",
    btn: "Get Started",
  },
];

const Hero = ({ navbarHeight }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ marginTop: navbarHeight }} // 👈 Navbar height থেকে gap
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full flex-shrink-0 h-[400px] lg:h-[500px]"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
              <motion.h2
                key={slide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl lg:text-4xl font-bold mb-2"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                key={slide.desc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base lg:text-lg mb-4"
              >
                {slide.desc}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-2xl bg-blue-400 font-semibold text-white shadow-lg"
              >
                {slide.btn}
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default Hero;
