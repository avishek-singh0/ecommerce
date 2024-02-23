import React, { useEffect, useState } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setFilteredData(json); // Initialize filteredData with all data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Fetch data only once when component mounts

  const fetchdata = (value) => {
    const result = data.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(result);
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    fetchdata(value);
  };

  const handlereq = (title) => {
    // Perform action on selecting an item, such as navigating to its details page
    console.log('Selected item:', title);
  };

  return (
    <div className='flex flex-col items-center'>
      <label htmlFor="searchInput" className='text-4xl p-4'>Search</label>
      <input
        className='w-72 h-10 rounded-lg text-black'
        type="text"
        id="searchInput"
        name="searchInput"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {searchQuery.trim() !== '' && (
        <ul>
          {filteredData.map(product => (
            <li onClick={() => handlereq(product.title)} key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
