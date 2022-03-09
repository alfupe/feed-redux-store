import { Dropdown } from 'semantic-ui-react';
import { useMemo } from 'react';
import { usePlanets } from 'hooks/use-planets';
import { STATUSES } from 'redux/statuses';

export default function PlanetsDropdown({ currentValue, onChange = () => {} }) {
  const { planets } = usePlanets();

  const planetsOptions = useMemo(() => {
    return planets?.items?.map(({ name }) => ({
      key: name,
      value: name,
      text: name,
    }));
  }, [planets]);

  return (
    <Dropdown
      loading={planets.status !== STATUSES.FULFILLED}
      disabled={planets.status !== STATUSES.FULFILLED}
      placeholder="Select planet"
      clearable
      fluid
      search
      selection
      options={planetsOptions}
      value={currentValue}
      onChange={(event, { value }) => onChange('planet', value)}
    />
  );
}
