import {
  SET_FILMS,
  SET_FILMS_IF_EMPTY,
  UNSET_FILMS,
} from 'redux/actions/films-actions';

export const initialState = [];

export const filmsReducer = (state = initialState, action) => {
  if (action.type === SET_FILMS) {
    return action.payload;
  }

  if (action.type === UNSET_FILMS) {
    return initialState;
  }

  if (action.type === SET_FILMS_IF_EMPTY) {
    return action.payload;
  }

  return state;
};
