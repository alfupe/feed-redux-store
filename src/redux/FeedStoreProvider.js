import React, { useEffect } from 'react';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';

const FeedStoreContext = React.createContext();

export function FeedStoreProvider({ children }) {
  const { films, setIfEmpty: setFilmsIfEmpty } = useFilms();
  const { planets, setIfEmpty: setPlanetsIfEmpty } = usePlanets();
  const { species, setIfEmpty: setSpeciesIfEmpty } = useSpecies();
  const { starships, setIfEmpty: setStarshipsIfEmpty } = useStarships();
  const { vehicles, setIfEmpty: setVehiclesIfEmpty } = useVehicles();

  useEffect(() => {
    setTimeout(() => {
      setFilmsIfEmpty();
      setPlanetsIfEmpty();
      setSpeciesIfEmpty();
      setStarshipsIfEmpty();
      setVehiclesIfEmpty();
    }, 100);
  }, [
    setFilmsIfEmpty,
    setPlanetsIfEmpty,
    setSpeciesIfEmpty,
    setStarshipsIfEmpty,
    setVehiclesIfEmpty,
  ]);

  return (
    <FeedStoreContext.Provider
      value={{
        isFeedingStore:
          !!films?.length &&
          !!planets?.length &&
          !!species?.length &&
          !!starships?.length &&
          !!vehicles?.length,
      }}
    >
      {children}
    </FeedStoreContext.Provider>
  );
}
