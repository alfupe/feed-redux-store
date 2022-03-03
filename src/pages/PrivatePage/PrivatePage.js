import LogoutAction from 'components/LogoutAction/LogoutAction';
import { useFilms } from 'hooks/use-films';
import { getAll as getAllPlanets } from 'services/planets.service';
import { getAll as getAllFilms } from 'services/films.service';
import { getAll as getAllSpecies } from 'services/species.service';
import { getAll as getAllStarships } from 'services/starships.service';
import { getAll as getAllVehicles } from 'services/vehicles.service';
import { usePlanets } from 'hooks/use-planets';
import { useSpecies } from 'hooks/use-species';
import { useStarships } from 'hooks/use-starships';
import { useVehicles } from 'hooks/use-vehicles';

export default function PrivatePage() {
  const { films, set: setFilms } = useFilms();
  const { planets, set: setPlanets } = usePlanets();
  const { species, set: setSpecies } = useSpecies();
  const { starships, set: setStarships } = useStarships();
  const { vehicles, set: setVehicles } = useVehicles();

  const feedStore = async (event) => {
    /*const { data: films } = await getAllFilms();
    const { data: planets } = await getAllPlanets();
    const { data: species } = await getAllSpecies();
    const { data: starships } = await getAllStarships();
    const { data: vehicles } = await getAllVehicles();*/

    const [
      { data: films },
      { data: planets },
      { data: species },
      { data: starships },
      { data: vehicles },
    ] = await Promise.all([
      getAllFilms(),
      getAllPlanets(),
      getAllSpecies(),
      getAllStarships(),
      getAllVehicles(),
    ]);

    setFilms(films);
    setPlanets(planets);
    setSpecies(species);
    setStarships(starships);
    setVehicles(vehicles);
  };

  return (
    <div>
      Private Page <LogoutAction />
      <button onClick={feedStore}>Feed store</button>
      <pre>
        {JSON.stringify(
          { films, planets, species, starships, vehicles },
          null,
          2,
        )}
      </pre>
    </div>
  );
}
