
import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/users`);

  return {
		type: FETCH_USERS,
		payload: request
	};
}

export function fetchPhotos() {
  const request = axios.get(`${ROOT_URL}/photos`);

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}
