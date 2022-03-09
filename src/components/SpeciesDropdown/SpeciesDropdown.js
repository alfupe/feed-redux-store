import { Dropdown } from 'semantic-ui-react';
import { useMemo } from 'react';
import { useSpecies } from 'hooks/use-species';
import { STATUSES } from 'redux/statuses';

export default function SpeciesDropdown({ currentValue, onChange = () => {} }) {
  const { species } = useSpecies();

  const speciesOptions = useMemo(() => {
    return species?.items?.map(({ name }) => ({
      key: name,
      value: name,
      text: name,
    }));
  }, [species]);

  return (
    <Dropdown
      loading={species.status !== STATUSES.FULFILLED}
      disabled={species.status !== STATUSES.FULFILLED}
      placeholder="Select species"
      clearable
      fluid
      search
      selection
      options={speciesOptions}
      value={currentValue}
      onChange={(event, { value }) => onChange('species', value)}
    />
  );
}
