import { rest } from 'msw';

export function buildHandler(
  endpoint,
  mockedResponse,
  method = 'get',
  status = 200,
) {
  return rest[method](
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    (request, response, context) => {
      return response(context.status(status), context.json(mockedResponse));
    },
  );
}
