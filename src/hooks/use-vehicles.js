import { useSelector } from 'react-redux';
import { set, unset, setIfEmpty } from 'redux/actions/vehicles-actions';
import { selectVehicles } from 'redux/selectors';
import { useActions } from 'hooks/use-actions';

export function useVehicles() {
  const vehicles = useSelector(selectVehicles);
  const actions = useActions({ set, unset, setIfEmpty });

  return { vehicles, ...actions };
}
