import { useGetProductsQuery } from "../../redux/Features/products/productApi";
import ProductCard from "../cards/ProductCard";
import Button from "./Button";
import Heading from "./Heading";

const FeaturedSection = () => {
const {data } = useGetProductsQuery()

// fetch(`https://sportify-server.brainicsoft.xyz/api/v1/products`)
// .then(res=>res.json())
// .then(data => console.log(data))

  return (
    <section className="my-20 mx-auto container">
      <Heading
      title="Feature Products"
      subtitle="Discover our latest and most popular products."
   
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(data as any)?.map((product:any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="shwbtn text-center mt-20">
        <Button>{`View All >>`} </Button>
      </div>
    </section>
  );
};

export default FeaturedSection;
