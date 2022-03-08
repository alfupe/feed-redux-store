import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllStarships } from 'services/starships.service';

export const setStarshipsIfEmpty = createAsyncThunk(
  'starships/setStarshipsIfEmpty',
  async (payload, { getState }) => {
    try {
      const { data } = await getAllStarships();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  {
    condition(payload, { getState }) {
      const { starships } = getState();
      return !starships?.length;
    },
  },
);

const initialState = [];

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships(state, action) {
      return action.payload;
    },
    unsetStarships(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setStarshipsIfEmpty.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setStarships, unsetStarships } = starshipsSlice.actions;

export default starshipsSlice.reducer;
