import { getAll as getAllFilms } from 'services/films.service';

export const SET_FILMS = 'SET_FILMS';
export const UNSET_FILMS = 'UNSET_FILMS';
export const SET_FILMS_IF_EMPTY = 'SET_FILMS_IF_EMPTY';

export const setFilms = (value) => ({ type: SET_FILMS, payload: value });
export const unsetFilms = () => ({ type: UNSET_FILMS });
export const setFilmsIfEmpty = () => async (dispatch, getState) => {
  const { films } = getState();
  if (!!films?.length) return;
  try {
    const { data } = await getAllFilms();
    dispatch({ type: SET_FILMS_IF_EMPTY, payload: data });
  } catch (error) {
    console.error(error);
  }
};
