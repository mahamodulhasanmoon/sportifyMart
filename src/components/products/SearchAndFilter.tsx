/* eslint-disable @typescript-eslint/no-explicit-any */
import { categories } from "../../constants/category";

const SearchAndFilter = ({
  searchQuery,
  handleCategoryChange,
  categoryFilter,
  handleSearchChange,
  handleSortChange,
  handleReset,
}: any) => {
  return (
    <div className="text-center mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="border rounded-md p-2 w-full text-gray-700 focus:outline-none focus:border-primaryColor"
        />

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border rounded-md py-2 px-3 w-full text-gray-700 focus:outline-none focus:border-primaryColor"
        >
          <option value=" ">All categories</option>
          {categories.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={categoryFilter}
          onChange={handleSortChange}
          className="border rounded-md py-2 px-3 w-full text-gray-700 focus:outline-none focus:border-primaryColor"
        >
          <option value=" ">Sort By Price</option>
          <option value="price">Low to High</option>
          <option value="-price">High to Low</option>
        </select>

        {/* Clear Filter Button */}
        <button
          onClick={handleReset}
          className="py-2 px-6 w-full bg-secondaryColor rounded-md hover:text-textColor-paragraph hover:bg-accentColor text-[#fff]"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
