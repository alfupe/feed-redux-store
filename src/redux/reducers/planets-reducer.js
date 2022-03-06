import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllPlanets } from 'services/planets.service';

export const setPlanetsIfEmpty = createAsyncThunk(
  'planets/setPlanetsIfEmpty',
  async (payload, { getState }) => {
    const { data } = await getAllPlanets();
    return data;
  },
  {
    condition(payload, { getState }) {
      const { planets } = getState();
      return !planets?.length;
    },
  },
);

const initialState = [];

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets(state, action) {
      return action.payload;
    },
    unsetPlanets(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPlanetsIfEmpty.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setPlanets, unsetPlanets } = planetsSlice.actions;

export default planetsSlice.reducer;
