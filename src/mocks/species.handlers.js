import { getAll } from 'mocks/responses/species';
import { buildHandler } from 'mocks/build-handler';

const version = 'v1';
const basePath = 'species';

export const speciesHandlers = [buildHandler(`${version}/${basePath}`, getAll)];
