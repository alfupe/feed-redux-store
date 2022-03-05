import {
  SET_VEHICLES,
  UNSET_VEHICLES,
  SET_VEHICLES_IF_EMPTY,
} from 'redux/actions/vehicles-actions';

export const initialState = [];

export const vehiclesReducer = (state = initialState, action) => {
  if (action.type === SET_VEHICLES) {
    return action.payload;
  }

  if (action.type === UNSET_VEHICLES) {
    return initialState;
  }

  if (action.type === SET_VEHICLES_IF_EMPTY) {
    return action.payload;
  }

  return state;
};
