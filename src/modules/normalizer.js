import { people } from 'mocks/responses/people-by-id';
import { vehicles } from 'mocks/responses/vehicles';
import { species } from 'mocks/responses/species';
import { planets } from 'mocks/responses/planets';
import { films } from 'mocks/responses/films';
import { starships } from 'mocks/responses/starships';

export const normalizer = () => {
  return people.map((person) => {
    return {
      ...person,
      films: person.films.map((personFilms) => {
        return films.find((film) => personFilms === film.id).title;
      }),
      species: person.species.map((personSpecies) => {
        return species.find((specie) => personSpecies === specie.id).name;
      }),
      homeworld: planets.find((planet) => planet.id === person.homeworld).name,
      starships: person.starships.map((personStarship) => {
        return starships.find((starship) => personStarship === starship.id)
          .name;
      }),
      vehicles: person.vehicles.map((personVehicle) => {
        return vehicles.find((vehicle) => personVehicle === vehicle.id).name;
      }),
    };
  });
};
