import { getAll as getAllSpecies } from 'services/species.service';

export const SET_SPECIES = 'SET_SPECIES';
export const UNSET_SPECIES = 'UNSET_SPECIES';
export const SET_SPECIES_IF_EMPTY = 'SET_SPECIES_IF_EMPTY';

export const setSpecies = (value) => ({ type: SET_SPECIES, payload: value });
export const unsetSpecies = () => ({ type: UNSET_SPECIES });
export const setSpeciesIfEmpty = () => async (dispatch, getState) => {
  const { species } = getState();
  if (!!species?.length) return;
  try {
    const { data } = await getAllSpecies();
    dispatch({ type: SET_SPECIES_IF_EMPTY, payload: data });
  } catch (error) {
    console.error(error);
  }
};
