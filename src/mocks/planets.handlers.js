import { getAll } from 'mocks/responses/planets';
import { buildHandler } from 'mocks/build-handler';

const version = 'v1';
const basePath = 'planets';

export const planetsHandlers = [buildHandler(`${version}/${basePath}`, getAll)];
