import {
  SET_STARSHIPS,
  UNSET_STARSHIPS,
  SET_STARSHIPS_IF_EMPTY,
} from 'redux/actions/starships-actions';

export const initialState = [];

export const starshipsReducer = (state = initialState, action) => {
  if (action.type === SET_STARSHIPS) {
    return action.payload;
  }

  if (action.type === UNSET_STARSHIPS) {
    return initialState;
  }

  if (action.type === SET_STARSHIPS_IF_EMPTY) {
    return action.payload;
  }

  return state;
};
