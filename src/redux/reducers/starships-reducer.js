import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllStarships } from 'services/starships.service';
import { STATUSES } from 'redux/statuses';

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
      return starships.status === STATUSES.EMPTY;
    },
  },
);

const initialState = {
  status: STATUSES.EMPTY,
  items: [],
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships(state, action) {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    },
    unsetStarships(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setStarshipsIfEmpty.pending, (state, action) => {
      state.status = STATUSES.PENDING;
    });
    builder.addCase(setStarshipsIfEmpty.fulfilled, (state, action) => {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    });
  },
});

export const { setStarships, unsetStarships } = starshipsSlice.actions;

export default starshipsSlice.reducer;
