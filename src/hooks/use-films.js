import { useSelector } from 'react-redux';
import { selectFilms } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';
import {
  setFilms,
  setFilmsIfEmpty,
  unsetFilms,
} from 'redux/reducers/films-reducer';

export function useFilms() {
  const films = useSelector(selectFilms);
  const actions = useActions({
    setFilms,
    unsetFilms,
    setFilmsIfEmpty,
  });

  return { films, ...actions };
}
