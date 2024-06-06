import React from 'react';

interface SearchProps {
  searchQuery?: string | null;
}

const Search: React.FC<SearchProps> = ({ searchQuery }) => {

  const searchResults = [
    { id: 1, title: 'Categoria 1', description: 'Cortes e colorações' },
    { id: 2, title: 'Categoria 2', description: 'Especialistas em cabelos cacheados' },
  ];

  console.log(searchQuery);

  return (
    <div>
      {searchResults.map((result) => (
        <div>{result.id} {result.title} {result.description} </div>
      ))}
    </div>
  );
};

export default Search;
