import { feedStore } from 'redux/actions/feed-store-actions';
import { useEffect } from 'react';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';
import { useDispatch } from 'react-redux';

export function useFeedStore() {
  const dispatch = useDispatch();
  const { films } = useFilms();
  const { planets } = usePlanets();
  const { species } = useSpecies();
  const { starships } = useStarships();
  const { vehicles } = useVehicles();

  useEffect(() => {
    setTimeout(() => {
      dispatch(feedStore());
    }, 100);
  }, [dispatch]);

  return (
    !films?.items?.length ||
    !planets?.items?.length ||
    !species?.items?.length ||
    !starships?.items?.length ||
    !vehicles?.items?.length
  );
}
