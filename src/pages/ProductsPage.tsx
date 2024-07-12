import SearchAndFilter from "../components/products/SearchAndFilter";
import FeaturedSection from "../components/ui/FeatureSection";
import Heading from "../components/ui/Heading";

export default function ProductsPage() {
  return (
    <div className="container mx-auto">
        <Heading
        title="Explore Branding"
        subtitle="Discover our latest and most popular products."
        />
        <SearchAndFilter/>
        <FeaturedSection/>

    </div>
  )
}
