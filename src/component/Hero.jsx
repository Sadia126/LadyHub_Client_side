import React from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      title: "Trendy Outfits for Every Girl",
      desc: "Explore our latest fashion collection designed just for you.",
      btn: "Shop Now",
    },
    {
      id: 2,
      img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      title: "Discover Your Style",
      desc: "From casual wear to party dresses — everything in one place.",
      btn: "Explore",
    },
    {
      id: 3,
      img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      title: "New Arrivals Every Week",
      desc: "Stay ahead with our fresh and chic clothing collection.",
      btn: "Browse",
    },
    {
      id: 4,
      img: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      title: "Upgrade Your Wardrobe",
      desc: "Shop elegant, classy and comfortable outfits for all occasions.",
      btn: "Get Started",
    },
  ];

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[calc(100vh-80px)] object-cover"
            />

            {/* Glass Overlay with Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-lg text-center text-white shadow-lg">
                <h2 className="text-2xl text-blue-200 md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="mb-5 text-sm  text-blue-200 md:text-base">{slide.desc}</p>
                <button className="bg-blue-400 hover:bg-blue-300 text-white px-6 py-2 rounded-lg shadow-md">
                  {slide.btn}
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${
                  index === 0 ? slides.length : slides[index - 1].id
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  index === slides.length - 1 ? 1 : slides[index + 1].id
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
