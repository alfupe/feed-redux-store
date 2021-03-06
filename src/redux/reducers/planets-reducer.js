import {
  SET_PLANETS,
  SET_PLANETS_IF_EMPTY,
  UNSET_PLANETS,
} from 'redux/actions/planets-actions';

export const initialState = [];

export const planetsReducer = (state = initialState, action) => {
  if (action.type === SET_PLANETS) {
    return action.payload;
  }

  if (action.type === UNSET_PLANETS) {
    return initialState;
  }

  if (action.type === SET_PLANETS_IF_EMPTY) {
    return action.payload;
  }

  return state;
};
