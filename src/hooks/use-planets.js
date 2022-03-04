import { useSelector } from 'react-redux';
import { set, unset, setIfEmpty } from 'redux/actions/planets-actions';
import { selectPlanets } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function usePlanets() {
  const planets = useSelector(selectPlanets);
  const actions = useActions({ set, unset, setIfEmpty });

  return { planets, ...actions };
}
