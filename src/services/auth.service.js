import { delay } from 'modules/delay/delay';

export async function isLoggedIn() {
  await delay();
  return JSON.parse(localStorage.getItem('isLoggedIn'));
}
