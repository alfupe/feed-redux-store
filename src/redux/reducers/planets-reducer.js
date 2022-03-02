import { SET_PLANETS } from 'redux/actions/planets-actions';

export const initialState = [];

export const planetsReducer = (state = initialState, action) => {
  if (action.type === SET_PLANETS) {
    return action.payload;
  }

  return state;
};
