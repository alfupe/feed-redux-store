import LogoutAction from 'components/LogoutAction/LogoutAction';
import { useFilms } from 'hooks/use-films';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';
import { Link } from 'react-router-dom';

export default function PrivatePage() {
  const { films, setIfEmpty } = useFilms();
  const { planets } = usePlanets();
  const { species } = useSpecies();
  const { starships } = useStarships();
  const { vehicles } = useVehicles();

  return (
    <article>
      <header>
        <h1>Private Page</h1>
        <Link to="/private2">Another private page</Link>
        <hr />
      </header>
      <LogoutAction />
      <pre>
        {JSON.stringify(
          { films, planets, species, starships, vehicles },
          null,
          2,
        )}
      </pre>
      <button onClick={() => setIfEmpty()}>dispatch thunk</button>
    </article>
  );
}
