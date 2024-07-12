import  {  useState } from 'react';

const SearchAndFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle category filter change
  const handleCategoryChange = (event:any) => {
    setCategoryFilter(event.target.value);
    // Implement search/filter logic here
    console.log('Search Query:', searchQuery); // Log current search query (optional)
    console.log('Category Filter:', event.target.value); // Log selected category filter
    // Call function to apply filter logic with searchQuery and categoryFilter
    applyFilter(searchQuery, event.target.value);
  };

  // Function to apply filter logic (replace with your actual filter implementation)
  const applyFilter = (searchQuery:string, categoryFilter:string) => {
    // Implement your filtering logic here
    console.log('Applying filter with Search Query:', searchQuery, 'and Category Filter:', categoryFilter);
    // Replace with actual filtering logic for your application
  };

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
          <option value="">All categories</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
          <option value="Tennis">Tennis</option>
          <option value="Swimming">Swimming</option>
          <option value="Running">Running</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
