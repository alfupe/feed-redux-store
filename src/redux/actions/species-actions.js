import { getAll as getAllSpecies } from 'services/species.service';

export const SET_SPECIES = 'SET_SPECIES';
export const UNSET_SPECIES = 'UNSET_SPECIES';
export const SET_EMPTY_SPECIES = 'SET_EMPTY_SPECIES';

export const set = (value) => ({ type: SET_SPECIES, payload: value });
export const unset = () => ({ type: UNSET_SPECIES });
export const setIfEmpty = () => async (dispatch, getState) => {
  const { species } = getState();
  if (!!species?.length) return;
  const { data } = await getAllSpecies();
  dispatch({ type: SET_EMPTY_SPECIES, payload: data });
};
