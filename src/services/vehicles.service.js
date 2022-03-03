import axios from 'axios';

const version = 'v1';
const basePath = 'vehicles';

export async function getAll(params) {
  return axios.request({
    url: `/${version}/${basePath}`,
    method: 'get',
    params,
  });
}
