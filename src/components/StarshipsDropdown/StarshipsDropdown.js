import { Dropdown } from 'semantic-ui-react';
import { useMemo } from 'react';
import { useStarships } from 'hooks/use-starships';
import { STATUSES } from 'redux/statuses';

export default function StarshipsDropdown({
  currentValue,
  onChange = () => {},
}) {
  const { starships } = useStarships();

  const starshipsOptions = useMemo(() => {
    return starships?.items?.map(({ name }) => ({
      key: name,
      value: name,
      text: name,
    }));
  }, [starships]);

  return (
    <Dropdown
      loading={starships.status === STATUSES.PENDING}
      disabled={starships.status !== STATUSES.FULFILLED}
      placeholder="Select starship"
      clearable
      fluid
      search
      selection
      options={starshipsOptions}
      value={currentValue}
      onChange={(event, { value }) => onChange('starship', value)}
    />
  );
}
