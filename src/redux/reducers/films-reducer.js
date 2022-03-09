import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllFilms } from 'services/films.service';
import { STATUSES } from 'redux/statuses';

export const setFilmsIfEmpty = createAsyncThunk(
  'films/setFilmsIfEmpty',
  async (payload, { getState }) => {
    try {
      const { data } = await getAllFilms();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  {
    condition(payload, { getState }) {
      const { films } = getState();
      return films.status === STATUSES.EMPTY;
    },
  },
);

const initialState = {
  status: STATUSES.EMPTY,
  items: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action) {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    },
    unsetFilms(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setFilmsIfEmpty.pending, (state, action) => {
        state.status = STATUSES.PENDING;
      })
      .addCase(setFilmsIfEmpty.fulfilled, (state, action) => {
        return {
          status: STATUSES.FULFILLED,
          items: action.payload,
        };
      });
  },
});

export const { setFilms, unsetFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
