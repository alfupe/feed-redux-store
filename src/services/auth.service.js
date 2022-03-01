import { delay } from 'modules/delay/delay';

export async function login(username, password) {
  await delay(500);
  return localStorage.setItem('isLoggedIn', 'true');
}

export async function isLoggedIn() {
  return JSON.parse(localStorage.getItem('isLoggedIn'));
}
