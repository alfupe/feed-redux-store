import { Grid, Segment } from 'semantic-ui-react';
import FilmsDropdown from 'components/FilmsDropdown/FilmsDropdown';
import PlanetsDropdown from 'components/PlanetsDropdown/PlanetsDropdown';
import SpeciesDropdown from 'components/SpeciesDropdown/SpeciesDropdown';
import StarshipsDropdown from 'components/StarshipsDropdown/StarshipsDropdown';
import VehiclesDropdown from 'components/VehiclesDropdown/VehiclesDropdown';
import { useCallback, useEffect, useState } from 'react';

export default function FiltersBar() {
  const [filters, setFilters] = useState(
    JSON.parse(localStorage.getItem('filters')) || {
      film: '',
      planet: '',
      species: '',
      starship: '',
      vehicle: '',
    },
  );
  const updateFilters = useCallback((entity, value) => {
    setFilters((previous) => ({
      ...previous,
      [entity]: value,
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  return (
    <Segment>
      <Grid columns="equal">
        <Grid.Column>
          <FilmsDropdown currentValue={filters.film} onChange={updateFilters} />
        </Grid.Column>
        <Grid.Column>
          <PlanetsDropdown
            currentValue={filters.planet}
            onChange={updateFilters}
          />
        </Grid.Column>
        <Grid.Column>
          <SpeciesDropdown
            currentValue={filters.species}
            onChange={updateFilters}
          />
        </Grid.Column>
        <Grid.Column>
          <StarshipsDropdown
            currentValue={filters.starship}
            onChange={updateFilters}
          />
        </Grid.Column>
        <Grid.Column>
          <VehiclesDropdown
            currentValue={filters.vehicle}
            onChange={updateFilters}
          />
        </Grid.Column>
      </Grid>
      <Segment>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </Segment>
    </Segment>
  );
}
