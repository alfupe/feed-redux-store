import { useSelector } from 'react-redux';
import { set } from 'redux/actions/species-actions';
import { selectSpecies } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useSpecies() {
  const species = useSelector(selectSpecies);
  const actions = useActions({ set });

  return { species, ...actions };
}
