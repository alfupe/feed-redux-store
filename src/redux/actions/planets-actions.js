import { getAll as getAllPlanets } from 'services/planets.service';

export const SET_PLANETS = 'SET_PLANETS';
export const UNSET_PLANETS = 'UNSET_PLANETS';
export const SET_EMPTY_PLANETS = 'SET_EMPTY_PLANETS';

export const set = (value) => ({ type: SET_PLANETS, payload: value });
export const unset = () => ({ type: UNSET_PLANETS });
export const setIfEmpty = () => async (dispatch, getState) => {
  const { planets } = getState();
  if (!!planets?.length) return;
  const { data } = await getAllPlanets();
  dispatch({ type: SET_EMPTY_PLANETS, payload: data });
};
