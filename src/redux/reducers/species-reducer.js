import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllSpecies } from 'services/species.service';

export const setSpeciesIfEmpty = createAsyncThunk(
  'species/setSpeciesIfEmpty',
  async (payload, { getState }) => {
    const { data } = await getAllSpecies();
    return data;
  },
  {
    condition(payload, { getState }) {
      const { species } = getState();
      return !species?.length;
    },
  },
);

const initialState = [];

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
    setSpecies(state, action) {
      return action.payload;
    },
    unsetSpecies(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSpeciesIfEmpty.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setSpecies, unsetSpecies } = speciesSlice.actions;

export default speciesSlice.reducer;
