import { setupWorker } from 'msw';
import { filmsHandlers } from 'mocks/films.handlers';
import { peopleHandlers } from 'mocks/people.handlers';
import { planetsHandlers } from 'mocks/planets.handlers';
import { speciesHandlers } from 'mocks/species.handlers';
import { starshipsHandlers } from 'mocks/starships.handlers';
import { vehiclesHandlers } from 'mocks/vehicles.handlers';

const combinedHandlers = [
  ...peopleHandlers,
  ...filmsHandlers,
  ...planetsHandlers,
  ...speciesHandlers,
  ...starshipsHandlers,
  ...vehiclesHandlers,
];
export const worker = setupWorker(...combinedHandlers);
