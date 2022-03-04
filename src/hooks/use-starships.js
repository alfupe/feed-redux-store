import { useSelector } from 'react-redux';
import { set, unset, setIfEmpty } from 'redux/actions/starships-actions';
import { selectStarships } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useStarships() {
  const starships = useSelector(selectStarships);
  const actions = useActions({ set, unset, setIfEmpty });

  return { starships, ...actions };
}
