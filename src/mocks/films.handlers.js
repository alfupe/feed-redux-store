import { getAll } from 'mocks/responses/films';
import { buildHandler } from 'mocks/build-handler';
const version = 'v1';
const basePath = 'films';

export const filmsHandlers = [buildHandler(`${version}/${basePath}`, getAll)];
