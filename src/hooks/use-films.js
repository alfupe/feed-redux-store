import { useSelector } from 'react-redux';
import { set, setIfEmpty } from 'redux/actions/films-actions';
import { selectFilms } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useFilms() {
  const films = useSelector(selectFilms);
  const actions = useActions({ set, setIfEmpty });

  return { films, ...actions };
}
