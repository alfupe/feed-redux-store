import { getAll } from 'mocks/responses/vehicles';
import { buildHandler } from 'mocks/build-handler';

const version = 'v1';
const basePath = 'vehicles';

export const vehiclesHandlers = [
  buildHandler(`${version}/${basePath}`, getAll),
];
