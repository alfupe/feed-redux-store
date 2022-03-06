import { useSelector } from 'react-redux';
import {
  setSpecies,
  unsetSpecies,
  setSpeciesIfEmpty,
} from 'redux/reducers/species-reducer';
import { selectSpecies } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useSpecies() {
  const species = useSelector(selectSpecies);
  const actions = useActions({
    setSpecies,
    unsetSpecies,
    setSpeciesIfEmpty,
  });

  return { species, ...actions };
}
