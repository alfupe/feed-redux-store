import { Dropdown } from 'semantic-ui-react';
import { useMemo } from 'react';
import { useFilms } from 'hooks/use-films';
import { STATUSES } from 'redux/statuses';

export default function FilmsDropdown({ currentValue, onChange = () => {} }) {
  const { films } = useFilms();

  const filmsOptions = useMemo(() => {
    return films?.items?.map(({ title }) => ({
      key: title,
      value: title,
      text: title,
    }));
  }, [films]);

  return (
    <Dropdown
      loading={films.status === STATUSES.PENDING}
      disabled={films.status !== STATUSES.FULFILLED}
      placeholder="Select film"
      clearable
      fluid
      search
      selection
      options={filmsOptions}
      value={currentValue}
      onChange={(event, { value }) => onChange('film', value)}
    />
  );
}
