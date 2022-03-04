import { getAll as getAllVehicles } from 'services/vehicles.service';

export const SET_VEHICLES = 'SET_VEHICLES';
export const UNSET_VEHICLES = 'UNSET_VEHICLES';
export const SET_EMPTY_VEHICLES = 'SET_EMPTY_VEHICLES';

export const set = (value) => ({ type: SET_VEHICLES, payload: value });
export const unset = () => ({ type: UNSET_VEHICLES });
export const setIfEmpty = () => async (dispatch, getState) => {
  const { vehicles } = getState();
  if (!!vehicles?.length) return;
  const { data } = await getAllVehicles();
  dispatch({ type: SET_EMPTY_VEHICLES, payload: data });
};
