import { useState } from "react";

export default function useSearch() {
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get('category');

    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState(paramValue);
  
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
