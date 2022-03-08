import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllPlanets } from 'services/planets.service';

export const setPlanetsIfEmpty = createAsyncThunk(
  'planets/setPlanetsIfEmpty',
  async (payload, { getState }) => {
    try {
      const { data } = await getAllPlanets();
      return data;
    } catch (error) {
      console.error(error);
    }
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
