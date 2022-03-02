import { SET_VEHICLES } from 'redux/actions/vehicles-actions';

export const initialState = [];

export const vehiclesReducer = (state = initialState, action) => {
  if (action.type === SET_VEHICLES) {
    return action.payload;
  }

  return state;
};
