import { useSelector } from 'react-redux';
import {
  setPlanets,
  unsetPlanets,
  setPlanetsIfEmpty,
} from 'redux/actions/planets-actions';
import { selectPlanets } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function usePlanets() {
  const planets = useSelector(selectPlanets);
  const actions = useActions({
    setPlanets,
    unsetPlanets,
    setPlanetsIfEmpty,
  });

  return { planets, ...actions };
}
