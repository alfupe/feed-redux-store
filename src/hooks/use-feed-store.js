import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';
import { useEffect } from 'react';

export function useFeedStore() {
  const { films, setIfEmpty } = useFilms();
  const { planets: storePlanets, set: setPlanets } = usePlanets();
  const { species: storeSpecies, set: setSpecies } = useSpecies();
  const { starships: storeStarships, set: setStarships } = useStarships();
  const { vehicles: storeVehicles, set: setVehicles } = useVehicles();
  console.log(films);

  useEffect(() => {
    console.log('eeee');
    setIfEmpty();
  }, [setIfEmpty]);

  return !films?.length /* ||
    !storePlanets?.length ||
    !storeSpecies?.length ||
    !storeStarships?.length ||
    !storeVehicles?.length*/;
}
