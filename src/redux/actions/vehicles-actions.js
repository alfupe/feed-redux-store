import { getAll as getAllVehicles } from 'services/vehicles.service';

export const SET_VEHICLES = 'SET_VEHICLES';
export const UNSET_VEHICLES = 'UNSET_VEHICLES';
export const SET_VEHICLES_IF_EMPTY = 'SET_VEHICLES_IF_EMPTY';

export const setVehicles = (value) => ({ type: SET_VEHICLES, payload: value });
export const unsetVehicles = () => ({ type: UNSET_VEHICLES });
export const setVehiclesIfEmpty = () => async (dispatch, getState) => {
  const { vehicles } = getState();
  if (!!vehicles?.length) return;
  try {
    const { data } = await getAllVehicles();
    dispatch({ type: SET_VEHICLES_IF_EMPTY, payload: data });
  } catch (error) {
    console.error(error);
  }
};
