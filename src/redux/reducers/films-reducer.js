import { SET_EMPTY_FILMS, SET_FILMS } from 'redux/actions/films-actions';

export const initialState = [];

export const filmsReducer = (state = initialState, action) => {
  if (action.type === SET_FILMS) {
    return action.payload;
  }

  if (action.type === SET_EMPTY_FILMS) {
    console.log('empty films actions');
    return action.payload;
  }

  return state;
};
