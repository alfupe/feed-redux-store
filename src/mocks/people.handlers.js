import { rest } from 'msw';
import { getAll } from 'mocks/responses/people';

const version = 'v1';
const basePath = 'people';

export const peopleHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/${version}/${basePath}`,
    (request, response, context) => {
      const person = new URLSearchParams(request.url.search).get('person');
      const responseData =
        person in getAll
          ? {
              status: 200,
              payload: getAll[person],
            }
          : {
              status: 444,
              payload: {
                detail: {
                  msg: `Person not found`,
                  type: 'people.person_not_found',
                  payload: { key: 'person', value: `${person}` },
                },
              },
            };
      return response(
        context.status(responseData.status),
        context.json(responseData.payload),
      );
    },
  ),
];
