import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const CharacterList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  console.log(error, data, loading);

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="character-list">
      {data.characters.results.map((character) => {
        return (
          <div key={`character-${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
