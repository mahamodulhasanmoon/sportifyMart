// HeroSection.jsx

import HeroBackground from "./../../assets/herobg.jpg"; // Replace with your actual image path
import HeroBackgroun1 from "./../../assets/yoga.png"; // Replace with your actual image path



import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";


const HeroSection = () => {
  const carouselItems = [
    {
      backgroundImage: HeroBackground,
      title: "Welcome to Sportify<span class='text-accentColor'>Mart</span>",
      subtitle: "Your ultimate destination for premium sporting goods",
      buttonText: "Shop Now",
    },
    {
      backgroundImage: HeroBackgroun1,
      title: "Summer Sale! Up to 50% Off",
      subtitle: "Explore our seasonal discounts on top brands",
      buttonText: "Discover Deals",
    },
    // Add more carousel items as needed
  ];

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="  flex items-center justify-center">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000} // Adjust carousel interval as needed
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="relative h-screen flex items-center justify-center"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="text-center text-white z-10">
                <h1
                  className="text-5xl font-bold leading-tight mb-4"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h1>
                <p className="text-xl text-gray-300 mb-8">{item.subtitle}</p>
                <Button>{item.buttonText}</Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
