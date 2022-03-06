import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllFilms } from 'services/films.service';

export const setFilmsIfEmpty = createAsyncThunk(
  'films/setFilmsIfEmpty',
  async (payload, { getState }) => {
    const { data } = await getAllFilms();
    return data;
  },
  {
    condition(payload, { getState }) {
      const { films } = getState();
      return !films?.length;
    },
  },
);

const initialState = [];

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action) {
      return action.payload;
    },
    unsetFilms(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      /*.addCase(setFilmsIfEmpty.pending, (state, action) => {
        //state.status = 'loading'
        console.log('setFilmsIfEmpty pending');
      })*/
      .addCase(setFilmsIfEmpty.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { setFilms, unsetFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
