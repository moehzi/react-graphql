import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

export const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) return <div>something went wrong...</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width="750"
        height={750}
      />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((eps) => {
            return (
              <div>
                {eps.name}-<b>{eps.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
