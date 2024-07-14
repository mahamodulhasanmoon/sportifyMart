import { AllProduct } from "../components/products/AllProduct";
import SearchAndFilter from "../components/products/SearchAndFilter";
import Heading from "../components/ui/Heading";
import useSearch from "../hooks/useSearch";

export default function ProductsPage() {
  const {categoryFilter,handleCategoryChange,handleSearchChange,searchQuery} = useSearch()
 
  return (
    <div className="container mx-auto">
        <Heading
        title="Explore Branding"
        subtitle="Discover our latest and most popular products."
        />
        <SearchAndFilter
        categoryFilter={categoryFilter}
        handleCategoryChange={handleCategoryChange}
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        />
       <AllProduct
       searchQuery={searchQuery}
       categoryFilter={categoryFilter}
       />

    </div>
  )
}
