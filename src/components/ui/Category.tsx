import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Heading from './Heading';

// Dummy data for categories (replace with actual data if available)
const categories = [
  { id: 1, name: 'Football', icon: '🏈' },
  { id: 2, name: 'Basketball', icon: '🏀' },
  { id: 3, name: 'Tennis', icon: '🎾' },
  { id: 4, name: 'Swimming', icon: '🏊‍♂️' },
  { id: 5, name: 'Running', icon: '🏃‍♂️' },
  { id: 6, name: 'Golf', icon: '⛳️' },
  { id: 7, name: 'Baseball', icon: '⚾️' },
  { id: 8, name: 'Baseball', icon: '⚾️' },
  { id: 9, name: 'Baseball', icon: '⚾️' },
  // Add more categories as needed
];

const Category = () => {
  const itemsPerSlide = 6; // Number of items to display per slide

  // Calculate number of slides based on itemsPerSlide
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  return (
    <div className="container mx-auto bg-gray-100 p-10 my-20 rounded-lg shadow-md">
    <Heading
    title='Explore Our Sporting Goods Categories'
    subtitle='Discover a wide range of sports equipment and accessories across various categories'
    />
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        centerMode={false}
        centerSlidePercentage={100 / itemsPerSlide}
        swipeable={true}
        dynamicHeight={true}
        autoPlay={true}
        interval={5000} // Change interval as per your requirement
        transitionTime={500} // Change transition time as per your requirement
        className="carousel-wrapper mb-10"
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="grid grid-cols-6 gap-4">
            {categories.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((category) => (
              <div key={category.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                <Link to={`/products/${category.id}`}>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primaryColor mb-2">{category.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Category;
