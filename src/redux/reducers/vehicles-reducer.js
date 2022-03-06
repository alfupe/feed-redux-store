import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll as getAllVehicles } from 'services/vehicles.service';

export const setVehiclesIfEmpty = createAsyncThunk(
  'vehicles/setVehiclesIfEmpty',
  async (payload, { getState }) => {
    const { data } = await getAllVehicles();
    return data;
  },
  {
    condition(payload, { getState }) {
      const { vehicles } = getState();
      return !vehicles?.length;
    },
  },
);

const initialState = [];

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles(state, action) {
      return action.payload;
    },
    unsetVehicles(state, action) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setVehiclesIfEmpty.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setVehicles, unsetVehicles } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
