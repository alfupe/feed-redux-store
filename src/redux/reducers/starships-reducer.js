import {
  SET_STARSHIPS,
  SET_EMPTY_STARSHIPS,
  UNSET_STARSHIPS,
} from 'redux/actions/starships-actions';

export const initialState = [];

export const starshipsReducer = (state = initialState, action) => {
  if (action.type === SET_STARSHIPS) {
    return action.payload;
  }

  if (action.type === UNSET_STARSHIPS) {
    return initialState;
  }

  if (action.type === SET_EMPTY_STARSHIPS) {
    return action.payload;
  }

  return state;
};
