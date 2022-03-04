import { getAll as getAllStarships } from 'services/starships.service';

export const SET_STARSHIPS = 'SET_STARSHIPS';
export const UNSET_STARSHIPS = 'UNSET_STARSHIPS';
export const SET_EMPTY_STARSHIPS = 'SET_EMPTY_STARSHIPS';

export const set = (value) => ({ type: SET_STARSHIPS, payload: value });
export const unset = () => ({ type: UNSET_STARSHIPS });
export const setIfEmpty = () => async (dispatch, getState) => {
  const { starships } = getState();
  if (!!starships?.length) return;
  const { data } = await getAllStarships();
  dispatch({ type: SET_EMPTY_STARSHIPS, payload: data });
};
