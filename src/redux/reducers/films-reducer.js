import { SET_FILMS } from 'redux/actions/films-actions';

export const initialState = [];

export const filmsReducer = (state = initialState, action) => {
  if (action.type === SET_FILMS) {
    return action.payload;
  }

  return state;
};
