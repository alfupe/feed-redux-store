import { getAll } from 'mocks/responses/starships';
import { buildHandler } from 'mocks/build-handler';

const version = 'v1';
const basePath = 'starships';

export const starshipsHandlers = [
  buildHandler(`${version}/${basePath}`, getAll),
];
