import { Link } from 'react-router-dom';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';

export default function Private2Page() {
  const { films } = useFilms();
  const { planets } = usePlanets();
  const { species } = useSpecies();
  const { starships } = useStarships();
  const { vehicles } = useVehicles();

  return (
    <article>
      <header>
        <h1>another private page</h1>
        <Link to="/private">Private page</Link>
        <hr />
      </header>
      <pre>
        {JSON.stringify(
          { films, planets, species, starships, vehicles },
          null,
          2,
        )}
      </pre>
    </article>
  );
}
