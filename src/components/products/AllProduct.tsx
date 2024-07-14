import { useGetProductsQuery } from "../../redux/Features/products/productApi";
import ProductCard from "../cards/ProductCard";



export const AllProduct = () => {
  const {data} = useGetProductsQuery()

  

  return (
    <section className="my-20 mx-auto container">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((product:any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    
    </section>
  );
};


