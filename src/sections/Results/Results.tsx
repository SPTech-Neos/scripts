import React from 'react';
import * as S from './results.styled';

interface Salon {
  id: number;
  title: string;
  
}

interface SearchProps<T> {
  searchResults?: T[];
}

const Results: React.FC<SearchProps<Salon>> = ({ searchResults }) => {
  if (!searchResults) {
    return <div>Nenhum resultado encontrado.</div>;
  }

  return (
    <S.Results>
      {searchResults.map((result) => (
        <div key={result.id}>
          <div>{result.id}</div>
          <div>{result.title}</div>
        </div>
      ))}
    </S.Results>
  );
};

export default Results;