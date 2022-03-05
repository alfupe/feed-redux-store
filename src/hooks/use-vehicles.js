import { useSelector } from 'react-redux';
import {
  setVehicles,
  unsetVehicles,
  setVehiclesIfEmpty,
} from 'redux/actions/vehicles-actions';
import { selectVehicles } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useVehicles() {
  const vehicles = useSelector(selectVehicles);
  const actions = useActions({
    setVehicles,
    unsetVehicles,
    setVehiclesIfEmpty,
  });

  return { vehicles, ...actions };
}
