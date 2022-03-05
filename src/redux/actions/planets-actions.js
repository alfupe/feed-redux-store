import { getAll as getAllPlanets } from 'services/planets.service';

export const SET_PLANETS = 'SET_PLANETS';
export const UNSET_PLANETS = 'UNSET_PLANETS';
export const SET_PLANETS_IF_EMPTY = 'SET_PLANETS_IF_EMPTY';

export const setPlanets = (value) => ({ type: SET_PLANETS, payload: value });
export const unsetPlanets = () => ({ type: UNSET_PLANETS });
export const setPlanetsIfEmpty = () => async (dispatch, getState) => {
  const { planets } = getState();
  if (!!planets?.length) return;
  try {
    const { data } = await getAllPlanets();
    dispatch({ type: SET_PLANETS_IF_EMPTY, payload: data });
  } catch (error) {
    console.error(error);
  }
};
