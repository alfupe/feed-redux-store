import {
  SET_SPECIES,
  SET_SPECIES_IF_EMPTY,
  UNSET_SPECIES,
} from 'redux/actions/species-actions';

export const initialState = [];

export const speciesReducer = (state = initialState, action) => {
  if (action.type === SET_SPECIES) {
    return action.payload;
  }

  if (action.type === UNSET_SPECIES) {
    return initialState;
  }

  if (action.type === SET_SPECIES_IF_EMPTY) {
    return action.payload;
  }

  return state;
};
