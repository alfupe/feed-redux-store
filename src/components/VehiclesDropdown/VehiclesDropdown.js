import { Dropdown } from 'semantic-ui-react';
import { useMemo } from 'react';
import { useVehicles } from 'hooks/use-vehicles';
import { STATUSES } from 'redux/statuses';

export default function VehiclesDropdown({
  currentValue,
  onChange = () => {},
}) {
  const { vehicles } = useVehicles();

  const vehiclesOptions = useMemo(() => {
    return vehicles?.items?.map(({ name }) => ({
      key: name,
      value: name,
      text: name,
    }));
  }, [vehicles]);

  return (
    <Dropdown
      loading={vehicles.status !== STATUSES.FULFILLED}
      disabled={vehicles.status !== STATUSES.FULFILLED}
      placeholder="Select vehicles"
      clearable
      fluid
      search
      selection
      options={vehiclesOptions}
      value={currentValue}
      onChange={(event, { value }) => onChange('vehicle', value)}
    />
  );
}
