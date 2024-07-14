import { useState } from "react";

export default function useSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
  
    // Function to handle search input change
    const handleSearchChange = (event:any) => {
      setSearchQuery(event.target.value);
    };
  
    const handleCategoryChange = (event:any) => {
      setCategoryFilter(event.target.value);
      applyFilter(searchQuery, event.target.value);
    };
  
    const applyFilter = (searchQuery:string, categoryFilter:string) => {
      console.log('Applying filter with Search Query:', searchQuery, 'and Category Filter:', categoryFilter);
    };
  return {
    categoryFilter,
    handleSearchChange,
    handleCategoryChange,
    searchQuery,
    
  }
}
