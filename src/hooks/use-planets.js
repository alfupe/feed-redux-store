import { useSelector } from 'react-redux';
import { selectPlanets } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';
import {
  setPlanets,
  setPlanetsIfEmpty,
  unsetPlanets,
} from 'redux/reducers/planets-reducer';

export function usePlanets() {
  const planets = useSelector(selectPlanets);
  const actions = useActions({
    setPlanets,
    unsetPlanets,
    setPlanetsIfEmpty,
  });

  return { planets, ...actions };
}
