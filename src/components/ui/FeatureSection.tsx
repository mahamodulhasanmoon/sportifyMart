import ProductCard from "../cards/ProductCard";
import Heading from "./Heading";

const FeaturedSection = () => {
  // Sample data (replace with actual fetched data)
  const latestProducts = [
    {
      id: 1,
      name: 'Running Shoes',
      category: 'Running',
      stock: 15,
      brand: 'Nike',
      rating: 4.5,
      description: 'High-performance running shoes for all types of runners.',
      price: 129.99,
      image: 'https://dummyimage.com/400x250/ccc/000.jpg&text=Running+Shoes',
    },
    {
      id: 2,
      name: 'Fitness Tracker',
      category: 'Fitness',
      stock: 10,
      brand: 'Fitbit',
      rating: 4.0,
      description: 'Track your fitness activities with this advanced fitness tracker.',
      price: 89.99,
      image: 'https://dummyimage.com/400x250/ccc/000.jpg&text=Fitness+Tracker',
    },
    {
      id: 3,
      name: 'Swimming Goggles',
      category: 'Swimming',
      stock: 20,
      brand: 'Speedo',
      rating: 4.2,
      description: 'Anti-fog swimming goggles with UV protection.',
      price: 19.99,
      image: 'https://dummyimage.com/400x250/ccc/000.jpg&text=Swimming+Goggles',
    },
    {
      id: 4,
      name: 'Swimming Goggles',
      category: 'Swimming',
      stock: 20,
      brand: 'Speedo',
      rating: 4.2,
      description: 'Anti-fog swimming goggles with UV protection.',
      price: 19.99,
      image: 'https://dummyimage.com/400x250/ccc/000.jpg&text=Swimming+Goggles',
    },
  ];

  return (
    <section className="my-20 mx-auto container">
      <Heading
      title="Feature Products"
      subtitle="Discover our latest and most popular products."
   
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
