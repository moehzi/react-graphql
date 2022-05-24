import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacterList } from '../hooks/useCharacterList';
export const CharacterList = () => {
  const { error, data, loading } = useCharacterList();

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="character-list">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={`character-${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
