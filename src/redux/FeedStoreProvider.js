import React, { useEffect } from 'react';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';

const FeedStoreContext = React.createContext();

export function FeedStoreProvider({ children }) {
  const { films, setIfEmpty } = useFilms();
  const { planets: storePlanets, set: setPlanets } = usePlanets();
  const { species: storeSpecies, set: setSpecies } = useSpecies();
  const { starships: storeStarships, set: setStarships } = useStarships();
  const { vehicles: storeVehicles, set: setVehicles } = useVehicles();

  useEffect(() => {
    setTimeout(setIfEmpty, 100);
  }, [setIfEmpty]);

  return (
    <FeedStoreContext.Provider value={{ isFeedingStore: !!films?.length }}>
      {children}
    </FeedStoreContext.Provider>
  );
}
