import { useState } from "react";

export default function useSearch() {
  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get('category');

    const [searchQuery, setSearchQuery] = useState('');
    const [sortQuery, setSortQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState(paramValue);
  
    // Function to handle search input change
    const handleSearchChange = (event:any) => {
      setSearchQuery(event.target.value);
    };
    const handleReset = () => {
      setSearchQuery('');
      setSortQuery('');
      setCategoryFilter('')
    };
  
    const handleCategoryChange = (event:any) => {
      setCategoryFilter(event.target.value);
    };
  
    const handleSortChange = (event:any) => {
      setSortQuery(event.target.value);
    };
  

  return {
    categoryFilter,
    handleSearchChange,
    handleCategoryChange,
    searchQuery,
    handleSortChange,
    sortQuery,
    handleReset

    
  }
}
