// HeroSection.jsx

import HeroBackground from "./../../assets/herobg.jpg"; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="text-center z-10 text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to SportifyMart
        </h1>
        <p className="text-xl mb-6">
          Your ultimate destination for premium sporting goods
        </p>
        <button className="bg-secondaryColor hover:bg-accentColor text-white py-3 px-8 rounded-full uppercase text-lg font-semibold shadow-md transition duration-300">
          Shop Now
        </button>
    </div>
    </div>
  );
};

export default HeroSection;
