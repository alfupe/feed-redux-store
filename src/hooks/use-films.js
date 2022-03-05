import { useSelector } from 'react-redux';
import {
  setFilms,
  unsetFilms,
  setFilmsIfEmpty,
} from 'redux/actions/films-actions';
import { selectFilms } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useFilms() {
  const films = useSelector(selectFilms);
  const actions = useActions({
    setFilms,
    unsetFilms,
    setFilmsIfEmpty,
  });

  return { films, ...actions };
}
