import { useSelector } from 'react-redux';
import {
  setStartships,
  unsetStarships,
  setStarshipsIfEmpty,
} from 'redux/actions/starships-actions';
import { selectStarships } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useStarships() {
  const starships = useSelector(selectStarships);
  const actions = useActions({
    setStartships,
    unsetStarships,
    setStarshipsIfEmpty,
  });

  return { starships, ...actions };
}
