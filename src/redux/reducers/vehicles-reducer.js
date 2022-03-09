import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllVehicles } from 'services/vehicles.service';
import { STATUSES } from 'redux/statuses';

export const setVehiclesIfEmpty = createAsyncThunk(
  'vehicles/setVehiclesIfEmpty',
  async (payload, { getState }) => {
    try {
      const { data } = await getAllVehicles();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  {
    condition(payload, { getState }) {
      const { vehicles } = getState();
      return vehicles.status === STATUSES.EMPTY;
    },
  },
);

const initialState = {
  status: STATUSES.EMPTY,
  items: [],
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles(state, action) {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    },
    unsetVehicles(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setVehiclesIfEmpty.pending, (state, action) => {
      state.status = STATUSES.PENDING;
    });
    builder.addCase(setVehiclesIfEmpty.fulfilled, (state, action) => {
      return {
        status: STATUSES.FULFILLED,
        items: action.payload,
      };
    });
  },
});

export const { setVehicles, unsetVehicles } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
