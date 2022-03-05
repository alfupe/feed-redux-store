import { getAll as getAllStarships } from 'services/starships.service';

export const SET_STARSHIPS = 'SET_STARSHIPS';
export const UNSET_STARSHIPS = 'UNSET_STARSHIPS';
export const SET_STARSHIPS_IF_EMPTY = 'SET_STARSHIPS_IF_EMPTY';

export const setStartships = (value) => ({
  type: SET_STARSHIPS,
  payload: value,
});
export const unsetStarships = () => ({ type: UNSET_STARSHIPS });
export const setStarshipsIfEmpty = () => async (dispatch, getState) => {
  const { starships } = getState();
  if (!!starships?.length) return;
  try {
    const { data } = await getAllStarships();
    dispatch({ type: SET_STARSHIPS_IF_EMPTY, payload: data });
  } catch (error) {
    console.error(error);
  }
};
