import { getAll as getAllFilms } from 'services/films.service';

export const SET_FILMS = 'SET_FILMS';
export const UNSET_FILMS = 'UNSET_FILMS';
export const SET_EMPTY_FILMS = 'SET_EMPTY_FILMS';

export const set = (value) => ({ type: SET_FILMS, payload: value });
export const unset = () => ({ type: UNSET_FILMS });
export const setIfEmpty = () => async (dispatch, getState) => {
  console.log('should I fetch❓');
  const { films } = getState();
  if (!!films?.length) {
    console.log('👎🏻 no!');
    return;
  }
  console.log('👍🏼 yes!');
  const { data } = await getAllFilms();
  dispatch({ type: SET_EMPTY_FILMS, payload: data });
};
