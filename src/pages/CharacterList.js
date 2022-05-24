import React from 'react';
import { useCharacters } from '../hooks/useCharacters';

export const CharacterList = () => {
  const { error, data, loading } = useCharacters();

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
