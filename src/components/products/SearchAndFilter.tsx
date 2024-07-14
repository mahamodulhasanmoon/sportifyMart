import { categories } from "../../constants/category";



const SearchAndFilter = ({searchQuery,handleCategoryChange,categoryFilter,handleSearchChange}:any) => {


  return (
    <div className=" text-center mx-auto">
      <div className="flex  gap-4 justify-center items-center">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="border rounded-md p-2  w-3/4  text-gray-700 focus:outline-none focus:border-primaryColor"
        />

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border rounded-md py-2   px-3 text-gray-700 focus:outline-none focus:border-primaryColor"
        >
          <option value=" ">All categories</option>
          {
            categories.map(({name}, i)=>(
              <option key={i} value={name}>{name}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
