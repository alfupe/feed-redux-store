import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllPlanets } from 'services/planets.service';
import { STATUSES } from 'redux/statuses';

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
      return planets.status === STATUSES.EMPTY;
    },
  },
);

const initialState = {
  status: STATUSES.EMPTY,
  items: [],
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets(state, action) {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    },
    unsetPlanets(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPlanetsIfEmpty.pending, (state, action) => {
      state.status = STATUSES.PENDING;
    });
    builder.addCase(setPlanetsIfEmpty.fulfilled, (state, action) => {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    });
  },
});

export const { setPlanets, unsetPlanets } = planetsSlice.actions;

export default planetsSlice.reducer;
