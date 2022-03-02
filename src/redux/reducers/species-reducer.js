import { SET_SPECIES } from 'redux/actions/species-actions';

export const initialState = [];

export const speciesReducer = (state = initialState, action) => {
  if (action.type === SET_SPECIES) {
    return action.payload;
  }

  return state;
};
