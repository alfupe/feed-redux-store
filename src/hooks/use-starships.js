import { useSelector } from 'react-redux';
import {
  unsetStarships,
  setStarshipsIfEmpty,
  setStarships,
} from 'redux/reducers/starships-reducer';
import { selectStarships } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useStarships() {
  const starships = useSelector(selectStarships);
  const actions = useActions({
    setStarships,
    unsetStarships,
    setStarshipsIfEmpty,
  });

  return { starships, ...actions };
}
