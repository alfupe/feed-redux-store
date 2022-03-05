import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';
import PageContainer from 'components/PageContainer/PageContainer';

export default function Private2Page() {
  const { films } = useFilms();
  const { planets } = usePlanets();
  const { species } = useSpecies();
  const { starships } = useStarships();
  const { vehicles } = useVehicles();

  return (
    <PageContainer title="Private page 1">
      <pre>
        {JSON.stringify(
          { films, planets, species, starships, vehicles },
          null,
          2,
        )}
      </pre>
    </PageContainer>
  );
}
