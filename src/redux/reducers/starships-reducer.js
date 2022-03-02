import { SET_STARSHIPS } from 'redux/actions/starships-actions';

export const initialState = [];

export const starshipsReducer = (state = initialState, action) => {
  if (action.type === SET_STARSHIPS) {
    return action.payload;
  }

  return state;
};
