import {
  SET_VEHICLES,
  SET_EMPTY_VEHICLES,
  UNSET_VEHICLES,
} from 'redux/actions/vehicles-actions';

export const initialState = [];

export const vehiclesReducer = (state = initialState, action) => {
  if (action.type === SET_VEHICLES) {
    return action.payload;
  }

  if (action.type === UNSET_VEHICLES) {
    return initialState;
  }

  if (action.type === SET_EMPTY_VEHICLES) {
    return action.payload;
  }

  return state;
};
