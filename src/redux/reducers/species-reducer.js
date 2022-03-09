import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllSpecies } from 'services/species.service';
import { STATUSES } from 'redux/statuses';

export const setSpeciesIfEmpty = createAsyncThunk(
  'species/setSpeciesIfEmpty',
  async (payload, { getState }) => {
    try {
      const { data } = await getAllSpecies();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  {
    condition(payload, { getState }) {
      const { species } = getState();
      return species.status === STATUSES.EMPTY;
    },
  },
);

const initialState = {
  status: STATUSES.EMPTY,
  items: [],
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
    setSpecies(state, action) {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    },
    unsetSpecies(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSpeciesIfEmpty.pending, (state, action) => {
      state.status = STATUSES.PENDING;
    });
    builder.addCase(setSpeciesIfEmpty.fulfilled, (state, action) => {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    });
  },
});

export const { setSpecies, unsetSpecies } = speciesSlice.actions;

export default speciesSlice.reducer;
