import { AllProduct } from "../components/products/AllProduct";
import SearchAndFilter from "../components/products/SearchAndFilter";
import Heading from "../components/ui/Heading";

export default function ProductsPage() {
  return (
    <div className="container mx-auto">
        <Heading
        title="Explore Branding"
        subtitle="Discover our latest and most popular products."
        />
        <SearchAndFilter/>
       <AllProduct/>

    </div>
  )
}
