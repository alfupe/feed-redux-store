import React, { useEffect } from 'react';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';
import { useFeedStore } from 'hooks/use-feed-store';

const FeedStoreContext = React.createContext(false);

export function FeedStoreProvider({ children }) {
  const { films } = useFilms();
  const { planets } = usePlanets();
  const { species } = useSpecies();
  const { starships } = useStarships();
  const { vehicles } = useVehicles();
  const { feedStore } = useFeedStore();

  useEffect(() => {
    feedStore();
  }, [feedStore]);

  return (
    <FeedStoreContext.Provider
      value={{
        isFeedingStore:
          !films?.length ||
          !planets?.length ||
          !species?.length ||
          !starships?.length ||
          !vehicles?.length,
      }}
    >
      {children}
    </FeedStoreContext.Provider>
  );
}
